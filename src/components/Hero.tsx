import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import fahadAvatar from "@/assets/fahad-avatar.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-30 floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-2xl opacity-40 floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src={fahadAvatar} 
                alt="Fahad Fasalu Rahiman"
                className="w-40 h-40 rounded-full border-4 border-primary/50 shadow-intense group-hover:scale-105 transition-transform duration-300 pulse-glow"
              />
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              Fahad Fasalu Rahiman
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              AI Engineer & Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground">
              B.Tech CSE Student at Govt. Model Engineering College
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-effect p-4 rounded-lg glow-effect">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="glass-effect p-4 rounded-lg glow-effect">
              <div className="text-2xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="glass-effect p-4 rounded-lg glow-effect">
              <div className="text-2xl font-bold text-primary">9.2</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="glass-effect p-4 rounded-lg glow-effect">
              <div className="text-2xl font-bold text-primary">Top 12</div>
              <div className="text-sm text-muted-foreground">AI/ML Rank</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-intense transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://www.linkedin.com/in/fahad-rahiman-3131a9255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/fahad10inb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect group"
            >
              <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:fahadfasalurahiman.mec@gmail.com"
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect group"
            >
              <Mail className="h-6 w-6 group-hover:text-primary transition-colors" />
            </a>
            <button 
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect group"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="h-6 w-6 group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;