import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "fahadfasalurahiman.mec@gmail.com",
      href: "mailto:fahadfasalurahiman.mec@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9778367899",
      href: "tel:+919778367899"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "DOB",
      value: "08/04/2005",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fahad-rahiman-3131a9255",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/fahad10inb",
      color: "hover:text-purple-400"
    }
  ];


  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-glow opacity-5 rounded-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Let's collaborate on innovative projects! Whether you have a question, opportunity, or just want to connect, 
              I'd love to hear from you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Currently open to exciting opportunities in AI/ML, software development, and innovative tech projects. 
                  Feel free to reach out for collaborations, internships, or just to have a tech conversation!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass-effect rounded-lg hover:bg-primary/20 transition-all duration-300 glow-effect ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <Card className="p-6 glass-effect border-primary/20">
                <h4 className="font-semibold mb-4">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <p className="font-medium">Kochi, India</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Experience:</span>
                    <p className="font-medium">2+ Years</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Specialization:</span>
                    <p className="font-medium">AI/ML & Full Stack</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Availability:</span>
                    <p className="font-medium text-green-400">Open to Opportunities</p>
                  </div>
                </div>
              </Card>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;