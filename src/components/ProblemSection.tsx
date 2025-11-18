import { useEffect, useRef, useState } from "react";
import { XCircle, Users, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
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

  const problems = [
    {
      icon: XCircle,
      title: "Clients forget minutes after leaving",
      description: "No review = no proof of care",
    },
    {
      icon: Users,
      title: "Staff is overloaded and stops asking",
      description: "Manual processes break under pressure",
    },
    {
      icon: AlertTriangle,
      title: "One bad review tanks your whole page",
      description: "Negative voices drown out all the positive ones",
    },
  ];

  return (
    <section id="problem" ref={sectionRef} className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Your Care Is Excellent.{" "}
            <span className="text-primary">Your Reviews Don't Show It.</span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-muted-foreground transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Because:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
