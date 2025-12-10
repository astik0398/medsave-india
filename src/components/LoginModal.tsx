import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const LoginModal = () => {
  const { isAuthOpen, setIsAuthOpen, setUser, setUserLoggedIn } = useAuth();

  // signup management
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState("");

  // login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // forgot password states
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);

  const handleSignUp = async () => {
    setAuthLoading(true);
    setAuthMessage("");

    if (!signupName || !signupEmail || !signupPassword) {
      setAuthMessage("Please fill in all fields.");
      setAuthLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,
        options: {
          data: { full_name: signupName },
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) throw error;

      if (data.user) {
        await supabase.from("user_profiles").insert([
          {
            user_id: data.user.id,
            full_name: signupName,
            email: signupEmail,
            created_at: new Date(),
          },
        ]);
      }

      toast({
        title: "Sign-up successful!",
        description: "Sign-up successful! Please proceed to login",
      });
    } catch (error: any) {
      console.error("Signup error:", error);
      setAuthMessage(error.message || "Error signing up. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      alert("Please enter email and password");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      console.error("Login error:", error.message);
      toast({
        title: "Login Failed!",
        description: "Invalid Credentials! Check your email or password",
      });
    } else {
      toast({
        title: "Login Successful!",
        description: "You have logged in successfully!",
      });

      // Set the logged-in user state
      if (data.user) {
        const { email, user_metadata, id } = data.user;
        console.log('email, user_metadata, id----', email, user_metadata, id);
        
        setUser({ full_name: user_metadata.full_name || "", email: email || "", id: id });
      }

      setIsAuthOpen(false);
      setUserLoggedIn(true);
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotEmail) {
      toast({
        title: "Email required",
        description: "Please enter your registered email address",
      });
      return;
    }

    setForgotLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(forgotEmail, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      toast({
        title: "Reset link sent!",
        description: "Please check your email for password reset instructions.",
      });
      setIsForgotOpen(false);
    } catch (err: any) {
      console.error("Reset error:", err.message);
      toast({
        title: "Error",
        description:
          err.message || "Failed to send reset link. Try again later.",
      });
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent className="sm:max-w-xs border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              Welcome to MediBachat
            </DialogTitle>
            <DialogDescription className="text-center">
              Sign up or log in to start comparing medicine prices
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <Button onClick={handleLogin} className="w-full" disabled={authLoading}>
                {authLoading ? "Logging in..." : "Log In"}
              </Button>
              <button
                type="button"
                onClick={() => setIsForgotOpen(true)}
                className="w-full text-sm text-primary hover:underline text-right"
              >
                Forgot Password?
              </button>
            </TabsContent>

            {/* Sign Up Tab */}
            <TabsContent value="signup" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">Full Name</Label>
                <Input
                  id="signup-name"
                  placeholder="John Doe"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="your@email.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
              {authMessage && (
                <p className="text-sm text-red-500">{authMessage}</p>
              )}
              <Button onClick={handleSignUp} className="w-full" disabled={authLoading}>
                {authLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Forgot Password Dialog */}
      <Dialog open={isForgotOpen} onOpenChange={setIsForgotOpen}>
        <DialogContent className="sm:max-w-xs border-primary/20">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Enter your registered email to receive a password reset link
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="forgot-email">Email</Label>
              <Input
                id="forgot-email"
                type="email"
                placeholder="your@email.com"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
              />
            </div>
            <Button
              onClick={handleForgotPassword}
              className="w-full"
              disabled={forgotLoading}
            >
              {forgotLoading ? "Sending..." : "Send Reset Link"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginModal;
