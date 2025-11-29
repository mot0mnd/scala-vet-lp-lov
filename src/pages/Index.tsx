import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ProofSection from "@/components/ProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to section if there's a hash in the URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <ProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
