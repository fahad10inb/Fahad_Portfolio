import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Navigation from "./Navigation";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Fahad Fasalu Rahiman. Built with React, TypeScript & Tailwind CSS.
            </p>
    
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;