import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";
import { useState } from "react";

// Mock data - replace with actual data source
const caseStudies = {
  "ecommerce-mobile-app": {
    title: "E-Commerce Mobile App",
    subtitle: "Redesigning the shopping experience",
    description: "A comprehensive redesign of a major retail brand's mobile application, focusing on improving user experience and increasing conversion rates.",
    challenge: "The existing mobile app had a 60% cart abandonment rate and poor user reviews citing confusing navigation and slow checkout process.",
    solution: "I conducted extensive user research, created user personas, and redesigned the entire user journey with a focus on streamlined navigation and one-click purchasing.",
    results: [
      "40% increase in mobile conversions",
      "25% reduction in cart abandonment",
      "4.8/5 star rating improvement",
      "15% increase in user retention"
    ],
    tags: ["Mobile App", "UX Research", "E-commerce"],
    image: "/src/assets/project-1.jpg",
    slides: null // Will be replaced with actual file upload
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [uploadedSlides, setUploadedSlides] = useState<string[]>([]);
  const [isViewingSlides, setIsViewingSlides] = useState(false);
  
  const caseStudy = id ? caseStudies[id as keyof typeof caseStudies] : null;

  // Mock slides for demonstration - replace with actual uploaded slides
  const mockSlides = [
    "/placeholder.svg?height=400&width=600&text=Slide+1",
    "/placeholder.svg?height=400&width=600&text=Slide+2", 
    "/placeholder.svg?height=400&width=600&text=Slide+3",
    "/placeholder.svg?height=400&width=600&text=Slide+4"
  ];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost" 
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {caseStudy.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Overview */}
          <Card className="p-8 shadow-medium bg-card-gradient">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.description}
              </p>
            </CardContent>
          </Card>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {caseStudy.solution}
            </p>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <Card key={index} className="p-4 shadow-soft bg-card-gradient">
                  <CardContent className="p-0">
                    <p className="text-foreground font-semibold">{result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Slides Section */}
          <Card className="p-8 shadow-medium bg-card-gradient">
            <CardContent className="p-0">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground text-center">Presentation Slides</h3>
                
                {/* For demo purposes, showing slides. In real app, check if slides exist */}
                {mockSlides.length > 0 && !isViewingSlides ? (
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">Slides are available for this case study</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button 
                        onClick={() => setIsViewingSlides(true)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        View Slides
                      </Button>
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                        <Download className="mr-2 h-4 w-4" />
                        Download Slides
                      </Button>
                    </div>
                  </div>
                ) : isViewingSlides ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Button 
                        onClick={() => setIsViewingSlides(false)}
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Upload
                      </Button>
                      <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    
                    {/* Slide Viewer with Carousel */}
                    <div className="relative">
                      <Carousel className="w-full max-w-3xl mx-auto">
                        <CarouselContent>
                          {mockSlides.map((slide, index) => (
                            <CarouselItem key={index}>
                              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                                <img 
                                  src={slide} 
                                  alt={`Slide ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                  {index + 1} / {mockSlides.length}
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">Upload your presentation slides (PPT, PDF)</p>
                    <div className="flex flex-col items-center space-y-4">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                          <span>
                            Upload Slides
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </span>
                        </Button>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".ppt,.pptx,.pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <p className="text-sm text-muted-foreground">
                        Supported formats: PPT, PPTX, PDF (Max 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;