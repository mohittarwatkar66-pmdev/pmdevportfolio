import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

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
  
  const caseStudy = id ? caseStudies[id as keyof typeof caseStudies] : null;

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

          {/* Slides Upload Section */}
          <Card className="p-8 shadow-medium bg-card-gradient">
            <CardContent className="p-0">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Presentation Slides</h3>
                
                {caseStudy.slides ? (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Slides are available for this case study</p>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Download className="mr-2 h-4 w-4" />
                      Download Slides
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
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