import { Shield, Code, Network, Lock } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Exploring vulnerabilities and defense mechanisms",
    },
    {
      icon: Code,
      title: "Programming",
      description: "Building secure applications and scripts",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Understanding network protocols and architecture",
    },
    {
      icon: Lock,
      title: "Ethical Hacking",
      description: "Learning penetration testing fundamentals",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            // ABOUT ME
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mt-2 mb-4">
            <span className="text-primary">&lt;</span>
            Who I Am
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* About text */}
          <div className="space-y-6">
            <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="font-mono text-muted-foreground text-sm mb-4">
                <span className="text-primary">const</span>{" "}
                <span className="text-secondary">aboutMe</span> = {"{"}
              </div>
              
              <div className="pl-4 space-y-3 text-foreground">
                <p>
                  <span className="text-primary font-mono">name:</span>{" "}
                  <span className="text-secondary">"Diwas Sapkota"</span>,
                </p>
                <p>
                  <span className="text-primary font-mono">location:</span>{" "}
                  <span className="text-secondary">"Nepal"</span>,
                </p>
                <p>
                  <span className="text-primary font-mono">education:</span>{" "}
                  <span className="text-secondary">"Grade 11 - Computer Engineering"</span>,
                </p>
                <p>
                  <span className="text-primary font-mono">passion:</span>{" "}
                  <span className="text-secondary">"Cyber Security & IT Innovation"</span>
                </p>
              </div>

              <div className="font-mono text-muted-foreground text-sm mt-4">{"}"}</div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated Computer Engineering student from Nepal with a strong passion for 
              cyber security and information technology. Currently in Grade 11, I'm actively 
              learning about ethical hacking, system security, and various programming languages.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity about how systems work and how to protect 
              them. I believe in continuous learning and staying updated with the latest security 
              trends and technologies.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="cyber-border rounded-lg p-6 bg-card/30 backdrop-blur-sm hover-glow transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
