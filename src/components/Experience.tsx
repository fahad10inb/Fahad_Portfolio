import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Users, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Stealth Startup",
      role: "AI Engineer",
      duration: "Ongoing",
      type: "Current Position",
      description: "Currently working as an AI Engineer, assisting in developing an English Learning Assistant App.",
      technologies: ["Flutter", "Whisper", "Hugging Face Transformers", "Python"],
      highlights: [
        "Developing AI-powered English learning solutions",
        "Implementing speech recognition and NLP features",
        "Working with cutting-edge transformer models"
      ]
    }
  ];

  const projects = [
    {
      name: "Finsight",
      role: "Software Developer",
      duration: "Ongoing",
      teamSize: "2",
      description: "Played a key role in creating Finsight, a platform for analyzing financial data and providing investment insights.",
      technologies: ["Yahoo Finance API", "Supabase", "Machine Learning Model", "React", "Python"]
    },
    {
      name: "SyncTrek",
      role: "Full Stack Developer",
      duration: "2 Months",
      teamSize: "4",
      description: "Actively working on developing SyncTrek, an AI-based itinerary preparation mobile application, that allows users to generate itineraries based on hotel, travel, and food recommendations.",
      technologies: ["Python", "Flutter"],
      githubUrl: "https://github.com/fahad10inb/SyncTrek"
    },
    {
      name: "SmartSync",
      role: "Software Developer",
      duration: "2 Months",
      teamSize: "4",
      description: "Developed SmartSync, an automated traffic management system that utilizes machine learning and real-time data to optimize traffic flow and reduce congestion.",
      technologies: ["Python", "Yolo", "TensorFlow", "OpenCV"]
    },
    {
      name: "Group.ai",
      role: "Software Developer",
      duration: "1 Month",
      teamSize: "8",
      description: "Built and implemented group.ai, an AI-driven chatbot system designed to provide personalized recommendations and intelligent assistance using NLP and cloud technologies.",
      technologies: ["IBM Watson Assistant", "IBM Cloud", "React", "IBM Watson NLP Services"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience & Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional experience and impactful projects in AI, ML, and software development.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            Work Experience
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <Badge variant="outline" className="border-accent/50 text-accent">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-foreground">{project.name}</h4>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/20 rounded-lg transition-colors group-hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-primary font-medium">{project.role}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Team of {project.teamSize}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-accent/10 text-accent border border-accent/20 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;