import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/favicon.ico" alt="Scala.vet logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
            <span className="text-xl sm:text-2xl font-bold text-primary">Scala.vet</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("proof")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Proof
            </button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("#login", "_self")}
            >
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign up for free
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("problem")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                The Problem
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("proof")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Proof
              </button>
              <Button variant="outline" className="w-full text-sm font-medium hover:bg-primary/10 hover:text-primary hover:border-primary">
                Log In
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign up for free
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
