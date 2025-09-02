import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

export default function EducationSection() {
  const education: Education[] = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2020 - 2022",
      description: "Specialized in Machine Learning and Software Engineering. Graduated Summa Cum Laude with a focus on distributed systems and artificial intelligence applications.",
      achievements: ["GPA: 3.9/4.0", "Dean's List", "Research Assistant"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2016 - 2020",
      description: "Comprehensive foundation in computer science fundamentals including algorithms, data structures, and software development. Active in coding competitions and open source projects.",
      achievements: ["GPA: 3.7/4.0", "ACM Member", "CS Teaching Assistant"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="education-title">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and software development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-border"></div>
          
          {education.map((item, index) => (
            <div key={index} className="relative mb-12 lg:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-2 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-card"></div>
              
              {/* Education card */}
              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                index % 2 === 0 ? "lg:pr-8" : "lg:ml-auto lg:pl-8 lg:pr-0"
              }`}>
                <Card className="card-hover" data-testid={`education-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground" data-testid={`education-degree-${index}`}>
                        {item.degree}
                      </h3>
                      <Badge variant="secondary" className="mt-2 sm:mt-0 bg-accent/10 text-accent">
                        {item.period}
                      </Badge>
                    </div>
                    <p className="text-lg text-secondary mb-2" data-testid={`education-institution-${index}`}>
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground mb-4" data-testid={`education-description-${index}`}>
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <Badge 
                          key={achIndex} 
                          variant="outline" 
                          className="text-xs bg-muted text-muted-foreground"
                          data-testid={`education-achievement-${index}-${achIndex}`}
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
