import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Lightbulb, Users, Target, Zap } from "lucide-react";

const About = () => {
  const skills = {
    technical: ["Python", "Machine Learning", "React", "MongoDB", "SQL", "Java", "C", "Git", "CSS", "Node.js", "Flutter"],
    soft: ["Leadership", "Communication", "Time Management", "Conflict Resolution", "Teamwork", "Critical Thinking"],
    interests: ["Machine Learning", "Data Science", "Deep Learning", "Problem Solving"]
  };

  const traits = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Enthusiast",
      description: "Passionate about machine learning and artificial intelligence with hands-on experience in developing AI-driven solutions."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Developer",
      description: "Proficient in both frontend and backend technologies, creating end-to-end solutions from concept to deployment."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Focused",
      description: "Always exploring cutting-edge technologies and implementing creative solutions to complex problems."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Player",
      description: "Strong collaborative skills with experience leading and working in diverse teams on multiple projects."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results Driven",
      description: "Consistently delivering high-quality solutions with a proven track record of achievements and recognitions."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and frameworks, with multiple certifications from top institutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-glow opacity-10 rounded-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Currently pursuing B.Tech in Computer Science Engineering. 
              Passionate about leveraging technology to solve real-world problems through innovative AI and ML solutions.
            </p>
          </div>

          {/* Character traits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {traits.map((trait, index) => (
              <Card 
                key={index} 
                className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{trait.title}</h3>
                    <p className="text-sm text-muted-foreground">{trait.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <Card className="p-6 glass-effect border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6 glass-effect border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6 glass-effect border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Core Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;