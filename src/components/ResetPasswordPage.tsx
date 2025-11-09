import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/Adobe Express - file.png";
import { supabase } from "@/lib/supabaseClient.js"; // Adjust path based on your folder structure

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

    const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    toast({
      title: "Passwords do not match!",
      variant: "destructive",
    });
    return;
  }

  setIsLoading(true);

  try {
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      toast({
        title: "Error resetting password",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
          title: "Password reset successful!",
          description: "Please log in again with your new password.",
        });

                // 🧹 Sign out temporary session and redirect to login
        await supabase.auth.signOut({ scope: "global" });
        
        navigate("/");

    }
  } catch (err) {
    toast({
      title: "Unexpected error",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  const checkTempSession = async () => {
    const { data } = await supabase.auth.getUser();

    if (data?.user) {
      console.log("Temporary session detected after password reset link click.");

      const timer = setTimeout(async () => {
        await supabase.auth.signOut();
        console.log("Temporary reset session cleared on refresh.");
      }, 50000);

      return () => clearTimeout(timer);
    }
  };

  checkTempSession();
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-lg p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
                                                <img className="w-16 h-16 m-auto mb-5" src={logo} alt="MedSave India" />

            <h1 className="text-2xl font-bold text-foreground">Reset Password</h1>
            <p className="text-sm text-muted-foreground">
              No worries, we'll send you reset instructions.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="conf-password">Confirm Password</Label>
              <Input
                id="conf-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="transition-all"
              />
            </div>

            <Button type="submit" className="w-full" variant="hero" disabled={isLoading}>
             <p className="text-white"> {isLoading ? "Sending..." : "Reset Password"}</p>
            </Button>
          </form>

          {/* Back to login */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </Link>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Didn't receive the email? Check your spam folder or try again.
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;