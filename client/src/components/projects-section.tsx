import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  completed: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment processing. Built with modern technologies for scalability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Express.js", "MongoDB", "Stripe"],
      completed: "March 2024",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
      completed: "January 2024",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard for business intelligence with real-time metrics, custom reports, and advanced filtering capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      completed: "December 2023",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for fitness tracking with workout planning, progress monitoring, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      completed: "October 2023",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects demonstrating various technologies and skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover" data-testid={`project-card-${index}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
                data-testid={`project-image-${index}`}
              />
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="text-muted-foreground hover:text-accent transition-colors"
                        data-testid={`project-github-${index}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="text-muted-foreground hover:text-accent transition-colors"
                        data-testid={`project-live-${index}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground" data-testid={`project-completed-${index}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Completed: {project.completed}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="px-6 py-3 text-base font-medium"
            data-testid="view-all-projects-button"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
