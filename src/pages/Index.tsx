import { Mail, Phone, MapPin, User, Briefcase, Award, Coffee } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  const caseStudies = [
    {
      id: "ecommerce-mobile-app",
      title: "Swish 10-minute Food Delivery",
      description: "Developed comprehensive product strategy to increase user retention from 12% to 25% through personalized experiences, feedback loops, and automated rewards system.",
      image: swishLogo,
      tags: ["Product Strategy", "User Retention", "Food Delivery"]
    }
  ];

  const skills = [
    { icon: User, title: "User Research", description: "Deep dive into user needs and behaviors" },
    { icon: Briefcase, title: "Product Strategy", description: "Aligning design with business objectives" },
    { icon: Coffee, title: "Prototyping", description: "Bringing ideas to life through iteration" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore detailed case studies of my product design work, including research, design process, and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((item, index) => (
              <CaseStudyCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                tags={item.tags}
                className="animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
              />
            ))}
          </div>
          
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Aspiring Product Manager with 3 years of software development experience in C++ and service-oriented architecture, eager to blend technical expertise with product thinking to build impactful solutions.I believe great design happens when creativity meets strategy, and I'm always looking for ways to push the boundaries of what's possible.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach combines user research, business strategy, and creative problem-solving to deliver solutions that not only look beautiful but also drive real results for businesses and their users.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-card-gradient">
                  <CardContent className="p-0 text-center">
                    <skill.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
