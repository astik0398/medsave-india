import { useState, useMemo, useEffect } from "react";
import { format, addDays } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pill, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const RefillReminder = () => {
  const [medicineName, setMedicineName] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [dosageAmount, setDosageAmount] = useState("");
  const [dosageFrequency, setDosageFrequency] = useState("day");
  const [startDate, setStartDate] = useState<Date>();
  const { user } = useAuth();

  const { estimatedDays, estimatedDate } = useMemo(() => {
    if (
      !totalQuantity ||
      !dosageAmount ||
      !startDate ||
      Number(dosageAmount) <= 0
    ) {
      return { estimatedDays: null, estimatedDate: null };
    }

    const dailyConsumption =
      dosageFrequency === "day"
        ? Number(dosageAmount)
        : Number(dosageAmount) / 7;

    if (dailyConsumption <= 0) {
      return { estimatedDays: null, estimatedDate: null };
    }

    const days = Math.floor(Number(totalQuantity) / dailyConsumption);
    const refillDate = addDays(startDate, days);

    return {
      estimatedDays: days,
      estimatedDate: refillDate,
    };
  }, [totalQuantity, dosageAmount, dosageFrequency, startDate]);

  const handleSaveReminder = async () => {
  if (!estimatedDate || !estimatedDays) return;

  const { error } = await supabase
    .from("refill_reminders")
    .insert([
      {
        medicine_name: medicineName,
        total_quantity: Number(totalQuantity),
        dosage_amount: Number(dosageAmount),
        dosage_frequency: dosageFrequency,
        start_date: startDate,
        estimated_days: estimatedDays,
        estimated_refill_date: estimatedDate,
        email: user.email,
        reminder_sent: false,
        user_id: user.id
      },
    ]);

  if (error) {
    console.error("Error saving reminder:", error);
     toast({
            title: "Error Setting Reminder!",
            description: "Failed to set the reminder. Please try again.",
          });

  } else {
     toast({
            title: "Reminder Set Successfully!",
            description: "You'll receive refill reminder 3 days before the estimated refill date.",
          });
  }
};

useEffect(()=> {
    console.log('user--', user);
}, [])

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-center">
          <Pill className="h-5 w-5 text-primary" />
          Set Refill Reminder
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="medicineName">Medicine Name</Label>
          <Input
            id="medicineName"
            type="text"
            placeholder="Enter medicine name"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalQuantity">Total Quantity Purchased</Label>
          <Input
            id="totalQuantity"
            type="number"
            placeholder="e.g. 30 tablets"
            value={totalQuantity}
            onChange={(e) => setTotalQuantity(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Purchased Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : "Select start date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="dosageAmount">Dosage Amount</Label>
            <Input
              id="dosageAmount"
              type="number"
              placeholder="e.g. 2"
              value={dosageAmount}
              onChange={(e) => setDosageAmount(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Frequency</Label>
            <Select value={dosageFrequency} onValueChange={setDosageFrequency}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Per Day</SelectItem>
                <SelectItem value="week">Per Week</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-muted/50 p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Estimated refill in:</span>
            <span className="font-medium text-foreground">
              {estimatedDays !== null ? `${estimatedDays} days` : "-- days"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Estimated refill date:</span>
            <span className="font-medium text-foreground">
              {estimatedDate ? format(estimatedDate, "PPP") : "--/--/----"}
            </span>
          </div>
        </div>

        <Button className="w-full text-white" disabled={!estimatedDate} onClick={handleSaveReminder}>
          Set Refill Reminder
        </Button>
      </CardContent>
    </Card>
  );
};

export default RefillReminder;
