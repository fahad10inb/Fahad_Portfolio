import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-glow rounded-full blur-3xl opacity-30 floating-animation"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-accent/20 rounded-full blur-2xl opacity-40 floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
        <div className="text-center max-w-4xl mx-auto pr-4 md:pr-0">
          {/* Name and Title */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 gradient-text px-2">
              Fahad Fasalu Rahiman
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 px-2">
              AI Engineer & Full Stack Developer
            </p>
            <p className="text-base sm:text-lg text-muted-foreground px-2">
              B.Tech CSE Student at Govt. Model Engineering College
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up max-w-2xl mx-auto px-4" style={{ animationDelay: '0.2s' }}>
            <div className="glass-effect p-3 sm:p-4 rounded-lg glow-effect">
              <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="glass-effect p-3 sm:p-4 rounded-lg glow-effect">
              <div className="text-xl sm:text-2xl font-bold text-primary">6+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="glass-effect p-3 sm:p-4 rounded-lg glow-effect">
              <div className="text-xl sm:text-2xl font-bold text-primary">9.2</div>
              <div className="text-xs sm:text-sm text-muted-foreground">CGPA</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-intense transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://www.linkedin.com/in/fahad-rahiman-3131a9255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect group"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/fahad10inb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect group"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:fahadfasalurahiman.mec@gmail.com"
              className="p-2 sm:p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect group"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;