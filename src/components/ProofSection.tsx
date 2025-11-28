import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, MessageSquare, Volume2, VolumeX } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.jpg";

const ProofSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const testimonials = [
    {
      quote: "Scala.vet transformed how we collect reviews. We're now the top-rated clinic in our area.",
      author: "Dr. James Chen",
      clinic: "Happy Paws Animal Hospital",
      rating: 5
    },
    {
      quote: "The one-tap system is brilliant. Our clients love how easy it is to leave reviews.",
      author: "Dr. Cecile Hoffer",
      clinic: "Guillotiere Veterinary Clinic",
      rating: 5
    },
    {
      quote: "We went from invisible to the first choice in our neighborhood. Game changer.",
      author: "Dr. Michael Brown",
      clinic: "Westside Animal Care",
      rating: 5
    }
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

        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-strong transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-base mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.clinic}</p>
              </div>
            </Card>
          ))}
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
                "We went from 60 reviews to 125 in 3 months. Our phone hasn't stopped ringing since."
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Dr. Karolina Ferreira</p>
                <p className="text-muted-foreground">Willow Creek Veterinary Clinic</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mx-auto w-full max-w-[300px]">
                {/* Phone mockup with video */}
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
                    
                    {/* Video */}
                    <div className="relative aspect-[9/19.5]">
                      <video
                        ref={videoRef}
                        autoPlay
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => {
                          if (videoRef.current) {
                            if (videoRef.current.paused) {
                              videoRef.current.play();
                            } else {
                              videoRef.current.pause();
                            }
                          }
                        }}
                      >
                        <source src="/karolina.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Sound Icon like Instagram */}
                      <button
                        onClick={() => {
                          setIsMuted(!isMuted);
                          if (videoRef.current) {
                            videoRef.current.muted = !isMuted;
                            // Auto-play video when unmuting
                            if (videoRef.current.paused) {
                              videoRef.current.play();
                            }
                          }
                        }}
                        className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl -z-10 opacity-50"></div>
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
