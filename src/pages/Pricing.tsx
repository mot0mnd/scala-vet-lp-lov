import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const startupFeatures = [
    "Unlimited Review Links",
    "Unlimited Client SMS Templates",
    "Smart Click Tracking",
    "Google Review Boost Mode",
    "1-Click Sharing"
  ];

  const businessFeatures = [
    "Full Clinic Setup Done-For-You",
    "Dedicated Onboarding",
    "Client Loyalty Card",
    "Laser Session Tracking",
    "Weight Tracker App",
    "Personalized Clinic Page",
    "Staff Access Control",
    "Faster-than-fast Support",
    "Mobile App Included (iOS + Android)"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Clear <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Start with a 7-day free trial
            </p>
            <p className="text-lg text-muted-foreground">
              The most valuable software in your clinic workflow
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Startup Plan */}
            <div className="border border-border rounded-2xl p-8 bg-card hover:shadow-strong transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">STARTUP</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$24</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
              </div>

              <p className="text-lg font-medium mb-6">Features You'll Love</p>

              <ul className="space-y-4 mb-8">
                {startupFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://platform.scala.vet/signup" target="_blank" rel="noopener noreferrer">
                  Start Now
                </a>
              </Button>
            </div>

            {/* Business Plan */}
            <div className="border-2 border-primary rounded-2xl p-8 bg-card hover:shadow-strong transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                MOST POPULAR
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">BUSINESS</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">Let's Talk</span>
                </div>
              </div>

              <p className="text-lg font-medium mb-6">Everything in Startup, plus:</p>

              <ul className="space-y-3 mb-8">
                {businessFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://cal.com/remibazy/10min" target="_blank" rel="noopener noreferrer">
                  Book a 10-min Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
