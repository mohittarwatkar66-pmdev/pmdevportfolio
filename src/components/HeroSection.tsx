import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToCaseStudies = () => {
    const element = document.getElementById("case-studies");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Product design workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-in slide-in-from-bottom duration-1000">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Hi, I'm <span className="text-accent">Alex Johnson</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              A passionate product designer with 5+ years of experience creating user-centered digital solutions. I specialize in transforming complex problems into intuitive, beautiful experiences that drive business results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToCaseStudies}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
            >
              View Case Studies
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;