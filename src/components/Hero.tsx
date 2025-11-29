import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-vet.jpg";
import logo1 from "@/assets/guillovet.png";
import logo2 from "@/assets/clinic-wasak.png";
import logo3 from "@/assets/bkkclinic.png";

const Hero = () => {
  const scrollToProof = () => {
    const element = document.getElementById("proof");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Transform Your Clinic's Reputation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              They Judge Your Clinic{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Before They Ever Meet You
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              One Google search decides if a client trusts you — or chooses someone else.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-8 py-6 shadow-strong transition-all duration-200"
                onClick={() => {
                  document.body.style.opacity = "0";
                  document.body.style.transition = "opacity 0.15s ease-out";
                  setTimeout(() => {
                    window.location.href = "https://platform.scala.vet/signup";
                  }, 150);
                }}
              >
                Start a 14-day free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-8 py-6 border-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-200"
                onClick={scrollToProof}
              >
                <Play className="mr-2 h-5 w-5" />
                See Results
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-white">
                    <img src={logo1} alt="Clinic logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-white">
                    <img src={logo2} alt="Clinic logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-white">
                    <img src={logo3} alt="Clinic logo" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="font-medium">200+ clinics trust us</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Happy veterinarian with golden retriever in modern clinic"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-card border border-border rounded-xl p-4 shadow-strong backdrop-blur-sm animate-fade-in">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Avg. Rating</div>
            </div>
            
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-card border border-border rounded-xl p-4 shadow-strong backdrop-blur-sm animate-fade-in">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">More Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
