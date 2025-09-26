import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
  style?: React.CSSProperties;
}

const CaseStudyCard = ({ id, title, description, image, tags, className, style }: CaseStudyCardProps) => {
  const navigate = useNavigate();

  const handleViewCaseStudy = () => {
    navigate(`/case-study/${id}`);
  };

  return (
    <Card style={style} className={`group overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card-gradient backdrop-blur-sm ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <Button 
          onClick={handleViewCaseStudy}
          variant="ghost" 
          className="p-0 h-auto text-accent hover:text-accent/80 group/btn"
        >
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;