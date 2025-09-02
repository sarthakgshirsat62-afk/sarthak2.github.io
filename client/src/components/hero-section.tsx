import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="gradient-bg pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="section-fade-in">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="John Smith - Professional headshot" 
                className="w-32 h-32 rounded-full mx-auto shadow-xl border-4 border-white" 
                data-testid="profile-image"
              />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Hi, I'm <span className="text-white">John Smith</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating innovative web applications 
              and delivering exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleScrollTo("projects")}
                className="bg-white text-primary hover:bg-gray-50 px-8 py-3 text-base font-medium"
                data-testid="view-work-button"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleScrollTo("contact")}
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-8 py-3 text-base font-medium"
                data-testid="get-in-touch-button"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
