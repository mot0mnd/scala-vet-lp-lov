import { useEffect, useRef, useState } from "react";
import { MousePointer, MessageSquare, Star } from "lucide-react";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      icon: MousePointer,
      title: "One Tap",
      description: "Staff taps one button when the client leaves.",
      color: "bg-primary",
    },
    {
      number: "2",
      icon: MessageSquare,
      title: "Instant SMS",
      description: "Client gets a clean, instant-open review link.",
      color: "bg-accent",
    },
    {
      number: "3",
      icon: Star,
      title: "5-Star Proof",
      description: "Review posts on Google — automatically.",
      color: "bg-primary",
    },
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The One-Tap Review Trigger™
          </h2>
          <p
            className={`text-lg sm:text-xl text-muted-foreground transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A system so simple your staff actually uses it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-soft`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-6 w-12 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`text-center space-y-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl sm:text-2xl font-semibold text-foreground">No training.</p>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">No dashboard.</p>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">No friction.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
