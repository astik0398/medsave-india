import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: { 
    id: string;
    full_name: string; 
    email: string;
    phone?: string;
    plan_name?: string;   // 👈 ADDED
  } | null;
  session: Session | null;
  userLoggedIn: boolean;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  setUser: (user: { 
    id: string;
    full_name: string; 
    email: string;
    phone?: string;
    plan_name?: string;  // 👈 ADDED
  } | null) => void;
  setUserLoggedIn: (loggedIn: boolean) => void;
  openLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<{
    id: string;
    full_name: string;
    email: string;
    phone?: string;
    plan_name?: string; // 👈 ADDED
  } | null>(null);

  const [session, setSession] = useState<Session | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // 🔥 Fetch profile from user_profiles table
  const loadUserProfile = async (userId: string) => {

    console.log('userId----',userId);
    
    const { data, error } = await supabase
      .from("user_profiles") // 👈 YOUR TABLE NAME
      .select("*")
      .eq("user_id", userId)
      .single();

          console.log('data----',data);

    if (error) {
      console.error("Error loading user profile:", error);
      return null;
    }

    return data;
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);

        if (session?.user) {
          const authUser = session.user;

          // Fetch DB profile
          loadUserProfile(authUser.id).then((profile) => {
            setUser({
              id: authUser.id,
              full_name: profile?.full_name || authUser.user_metadata.full_name || "",
              email: profile?.email || authUser.email || "",
              phone: profile?.phone || authUser.user_metadata.phone || "",
              plan_name: profile?.plan_name || "Free", // 👈 DEFAULT FREE
            });
          });

          setUserLoggedIn(true);
        } else {
          setUser(null);
          setUserLoggedIn(false);
        }
      }
    );

    // 💡 Check existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);

      if (session?.user) {
        const authUser = session.user;

        loadUserProfile(authUser.id).then((profile) => {
          setUser({
            id: authUser.id,
            full_name: profile?.full_name || authUser.user_metadata.full_name || "",
            email: profile?.email || authUser.email || "",
            phone: profile?.phone || authUser.user_metadata.phone || "",
            plan_name: profile?.plan_name || "Free",
          });
        });

        setUserLoggedIn(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const openLoginModal = () => setIsAuthOpen(true);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        userLoggedIn,
        isAuthOpen,
        setIsAuthOpen,
        setUser,
        setUserLoggedIn,
        openLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};