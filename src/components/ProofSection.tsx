import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, MessageSquare } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.jpg";

const ProofSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const proofPoints = [
    {
      icon: Star,
      title: "Real Results Demo",
      description: "See actual clinic data",
    },
    {
      icon: Users,
      title: "Staff Using One-Tap",
      description: "Instant review trigger",
    },
    {
      icon: MessageSquare,
      title: "Review Flow",
      description: "SMS to 5-star journey",
    },
    {
      icon: TrendingUp,
      title: "Before → After",
      description: "Clinic transformation",
    },
  ];

  return (
    <section id="proof" ref={sectionRef} className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Real Clinics. <span className="text-primary">Real Proof.</span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-muted-foreground transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Independents using Scala.vet are dominating the search moment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-strong transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Card */}
        <div
          className={`max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-strong transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium mb-6 leading-relaxed">
                "We went from 12 reviews to 127 in 3 months. Our phone hasn't stopped ringing since."
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Dr. Sarah Mitchell</p>
                <p className="text-muted-foreground">Paws & Claws Veterinary Clinic</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                <img
                  src={phoneMockup}
                  alt="Scala.vet mobile interface showing review process"
                  className="relative w-full max-w-xs mx-auto rounded-2xl shadow-strong"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          {[
            { value: "85%", label: "More Reviews" },
            { value: "4.8★", label: "Avg Rating Boost" },
            { value: "3x", label: "More Visibility" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 8) * 150}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
