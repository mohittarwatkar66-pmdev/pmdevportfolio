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
      title: "E-Commerce Mobile App",
      description: "Redesigned the entire shopping experience for a major retail brand, resulting in 40% increase in mobile conversions and improved user satisfaction scores.",
      image: project1,
      tags: ["Mobile App", "UX Research", "E-commerce"]
    }
  ];

  const skills = [
    { icon: User, title: "User Research", description: "Deep dive into user needs and behaviors" },
    { icon: Briefcase, title: "Product Strategy", description: "Aligning design with business objectives" },
    { icon: Award, title: "Design Systems", description: "Creating scalable and consistent experiences" },
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
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">More case studies coming soon...</p>
            <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
              Add New Case Study
            </Button>
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
                  I'm a passionate product designer with over 5 years of experience creating digital experiences that users love. I believe great design happens when creativity meets strategy, and I'm always looking for ways to push the boundaries of what's possible.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach combines user research, business strategy, and creative problem-solving to deliver solutions that not only look beautiful but also drive real results for businesses and their users.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
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
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to work on new projects and collaborate with amazing people. Drop me a message and let's create something incredible together.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">hello@yourportfolio.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6 shadow-medium bg-card-gradient">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input id="name" type="text" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" type="text" placeholder="Project inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="resize-none"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg shadow-medium hover:shadow-strong transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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