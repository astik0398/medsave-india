import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: { full_name: string; email: string } | null;
  session: Session | null;
  userLoggedIn: boolean;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  setUser: (user: { full_name: string; email: string } | null) => void;
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
  const [user, setUser] = useState<{ full_name: string; email: string } | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (session?.user) {
          setUser({
            full_name: session.user.user_metadata.full_name || "",
            email: session.user.email || "",
          });
          setUserLoggedIn(true);
        } else {
          setUser(null);
          setUserLoggedIn(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        setUser({
          full_name: session.user.user_metadata.full_name || "",
          email: session.user.email || "",
        });
        setUserLoggedIn(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const openLoginModal = () => {
    setIsAuthOpen(true);
  };

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
