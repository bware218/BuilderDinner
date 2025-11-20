import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CheckCircle2 } from "lucide-react";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function RequestInvite() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading } = useAuth();
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Check if user has already requested
  const { data: checkData } = useQuery<{ hasRequested: boolean; request?: any }>({
    queryKey: ["/api/invite-requests/check"],
    enabled: isAuthenticated && !isLoading,
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  const mutation = useMutation({
    mutationFn: async (data: { fullName: string; city: string; role: string }) => {
      const response = await fetch("/api/invite-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your invite request has been submitted.",
      });
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ fullName, city, role });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-xl font-display font-bold">Loading...</div>
      </div>
    );
  }

  if (checkData?.hasRequested || submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="bg-card border-2 border-black p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="h-24 w-24 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">YOU'RE ON THE LIST!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for your interest in the Replit Fellows Builder Dinner Tour. We've received your request for <strong>{checkData?.request?.city || city}</strong>.
              </p>
              <div className="bg-yellow-400 border-2 border-black p-6 mb-8 transform -rotate-1">
                <p className="font-bold text-black">
                  📧 Keep an eye on your inbox! We'll send you an invitation email soon with event details and next steps.
                </p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                <a href="/">BACK TO HOME</a>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tighter">REQUEST AN INVITE</h1>
            <p className="text-xl text-muted-foreground">
              Join the next generation of diverse founders building the future.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-base font-bold mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  className="bg-white border-2 border-black focus-visible:ring-primary rounded-none font-medium"
                />
              </div>

              {/* City of Interest */}
              <div>
                <Label htmlFor="city" className="text-base font-bold mb-2 block">
                  City of Interest *
                </Label>
                <Select value={city} onValueChange={setCity} required>
                  <SelectTrigger className="bg-white border-2 border-black focus-visible:ring-primary rounded-none font-medium">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <SelectItem value="Atlanta, GA" className="font-medium">Atlanta, GA</SelectItem>
                    <SelectItem value="Oakland, CA" className="font-medium">Oakland, CA</SelectItem>
                    <SelectItem value="Harlem, NYC" className="font-medium">Harlem, NYC</SelectItem>
                    <SelectItem value="Minneapolis, MN" className="font-medium">Minneapolis, MN</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Host or Attendee */}
              <div>
                <Label className="text-base font-bold mb-3 block">
                  I'm interested in: *
                </Label>
                <RadioGroup value={role} onValueChange={setRole} required className="space-y-3">
                  <div className="flex items-center space-x-3 border-2 border-border p-4 hover:bg-muted transition-colors">
                    <RadioGroupItem value="Attendee" id="attendee" className="border-2 border-black" />
                    <Label htmlFor="attendee" className="font-bold cursor-pointer flex-1">
                      Attending a Dinner
                      <p className="text-sm font-normal text-muted-foreground mt-1">I want to join a dinner in my city and build my idea.</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 border-border p-4 hover:bg-muted transition-colors">
                    <RadioGroupItem value="Host" id="host" className="border-2 border-black" />
                    <Label htmlFor="host" className="font-bold cursor-pointer flex-1">
                      Hosting a Dinner
                      <p className="text-sm font-normal text-muted-foreground mt-1">I want to bring this experience to my community.</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending || !fullName || !city || !role}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-lg tracking-wide border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed py-6"
              >
                {mutation.isPending ? "SUBMITTING..." : "SUBMIT REQUEST"}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
