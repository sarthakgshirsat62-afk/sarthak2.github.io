import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceSection() {
  const experience: Experience[] = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      duration: "2+ years",
      description: "Lead development of scalable web applications serving 100K+ daily active users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Implemented CI/CD pipeline improving deployment frequency by 300%",
        "Led team of 5 developers in agile development practices"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      duration: "2 years",
      description: "Built and maintained full-stack web applications for early-stage startup. Responsible for entire product development lifecycle from conception to deployment.",
      achievements: [
        "Developed MVP that secured $2M in Series A funding",
        "Built responsive web application from scratch using modern technologies",
        "Implemented real-time features with WebSocket connections"
      ],
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis", "WebSocket"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles in software development and technology
          </p>
        </div>
        
        <div className="space-y-8">
          {experience.map((item, index) => (
            <Card key={index} className="card-hover" data-testid={`experience-card-${index}`}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-2" data-testid={`experience-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-lg text-accent font-medium mb-2" data-testid={`experience-company-${index}`}>
                      {item.company}
                    </p>
                    <p className="text-muted-foreground" data-testid={`experience-location-${index}`}>
                      {item.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0">
                    <Badge className="bg-accent/10 text-accent mb-2" data-testid={`experience-period-${index}`}>
                      {item.period}
                    </Badge>
                    <span className="text-sm text-muted-foreground" data-testid={`experience-duration-${index}`}>
                      {item.duration}
                    </span>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground mb-4" data-testid={`experience-description-${index}`}>
                    {item.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start" data-testid={`experience-achievement-${index}-${achIndex}`}>
                        <Check className="text-accent mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                        data-testid={`experience-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
