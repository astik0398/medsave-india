import RefillReminder from "./RefillReminder";
import { Bell, Clock, CalendarCheck, Sparkles } from "lucide-react";

const RefillReminderSection = () => {
  return (
    <section id="refill" className="py-16 md:py-8 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Illustration & Text */}
          <div className="p-5">
            {/* Decorative illustration */}
            <div className="relative">

              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Bell className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Never Miss a Refill</h3>
                    <p className="text-sm text-muted-foreground">Stay on top of your medications</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <p className="text-muted-foreground leading-relaxed">
                  Keep track of when you'll need to reorder your prescriptions. Our smart calculator 
                  helps you plan ahead so you never run out of essential medications.
                </p>

                {/* Feature highlights */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-lg bg-green-500/10">
                      <Clock className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Smart Scheduling</h4>
                      <p className="text-sm text-muted-foreground">
                        Calculate exact refill dates based on your dosage
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-lg bg-blue-500/10">
                      <CalendarCheck className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Plan Ahead</h4>
                      <p className="text-sm text-muted-foreground">
                        Know exactly when to order your next prescription
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-lg bg-purple-500/10">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Save Money</h4>
                      <p className="text-sm text-muted-foreground">
                        Avoid rush orders and compare prices before you run out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-5">
              <div className="text-center p-4 rounded-xl bg-card/30 border border-border/30">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Reminders Set</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/30 border border-border/30">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground">On-Time Refills</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/30 border border-border/30">
                <div className="text-2xl font-bold text-primary">$120</div>
                <div className="text-xs text-muted-foreground">Avg. Savings</div>
              </div>
            </div>
          </div>

                    {/* RIGHT: Form */}
          <div className="flex justify-center">
            <RefillReminder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefillReminderSection;