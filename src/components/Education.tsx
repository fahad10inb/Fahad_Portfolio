import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Govt. Model Engineering College",
      degree: "B.Tech in Computer Science Engineering",
      board: "KTU",
      year: "2026",
      grade: "9.2 CGPA",
      status: "Current"
    },
    {
      institution: "Emirates National School",
      degree: "12th Grade",
      board: "CBSE",
      year: "2022",
      grade: "92.8%",
      status: "Completed"
    },
    {
      institution: "Emirates National School",
      degree: "10th Grade",
      board: "CBSE",
      year: "2020",
      grade: "86.8%",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Introduction to Machine Learning",
      provider: "NPTEL (IIT Kharagpur)",
      category: "AI/ML"
    },
    {
      title: "Improving Deep Neural Networks",
      provider: "Coursera (DeepLearning.AI)",
      category: "AI/ML"
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      provider: "Udemy (Dr. Angela Yu)",
      category: "Web Development"
    },
    {
      title: "Getting Started with Artificial Intelligence",
      provider: "IBM SkillsBuild",
      category: "AI/ML"
    },
    {
      title: "LangChain for LLM Application Development",
      provider: "DeepLearning.AI",
      category: "AI/ML"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      provider: "IBM SkillsBuild",
      category: "AI/ML"
    }
  ];

  const achievements = [
    {
      title: "Best Performer in MECLABS",
      event: "Excel 2024",
      organizer: "Govt. Model Engineering College, Kochi",
      icon: <Trophy className="h-5 w-5" />,
      type: "Award"
    },
    {
      title: "Top 12 Position",
      event: "AI Chatbot Innovation - AI/ML Internship Program 2024",
      organizer: "CSRBOX and IBM (650+ projects)",
      icon: <Award className="h-5 w-5" />,
      type: "Competition"
    },
    {
      title: "Top 30 Position",
      event: "Build with AI Hackathon 2024",
      organizer: "Google Developer Groups Cloud Kochi (400+ participants)",
      icon: <Award className="h-5 w-5" />,
      type: "Hackathon"
    },
    {
      title: "Participant",
      event: "IBeTo 2024",
      organizer: "Flagship event for socially relevant technical innovations",
      icon: <GraduationCap className="h-5 w-5" />,
      type: "Event"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-primary/10 text-primary border-primary/20";
      case "Web Development":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-secondary/10 text-secondary-foreground border-secondary/20";
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic excellence and continuous learning through prestigious institutions and industry-recognized certifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{edu.institution}</h4>
                  <p className="text-primary font-medium mb-2">{edu.degree}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.board} • {edu.year}</span>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Badge className="bg-gradient-primary text-primary-foreground border-0">
                      {edu.grade}
                    </Badge>
                    <Badge variant="outline" className={`border-${edu.status === 'Current' ? 'accent' : 'secondary'}/50`}>
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{cert.provider}</p>
                    <Badge variant="secondary" className={getCategoryColor(cert.category)}>
                      {cert.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Achievements & Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                      <Badge variant="outline" className="border-accent/50 text-accent ml-2">
                        {achievement.type}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-1">{achievement.event}</p>
                    <p className="text-sm text-muted-foreground">{achievement.organizer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;