import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Networking Basics", level: 50, category: "Infrastructure" },
  { name: "Cyber Security Fundamentals", level: 50, category: "Security" },
  { name: "Ethical Hacking", level: 30, category: "Security" },
 
  { name: "HTML & CSS", level: 80, category: "Development" },
  { name: "Java (Basic)", level: 60, category: "Development" },
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-foreground">{skill.name}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-mono">
            {skill.category}
          </span>
        </div>
        <span className="font-mono text-primary text-sm">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalTools = [
    "Kali Linux",
    "VS Code",
    "Git",
    "Github",
    "Parrot OS",

  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            // SKILLS
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mt-2 mb-4">
            <span className="text-primary">&lt;</span>
            Technical Arsenal
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Skill bars */}
          <div className="space-y-6">
            <h3 className="font-mono text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary">#</span> Core Competencies
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="font-mono text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary">#</span> Tools & Technologies
            </h3>
            
            <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary"></span> Tools
              </div>
              
              <div className="flex flex-wrap gap-3">
                {technicalTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 text-foreground font-mono text-sm hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary/20">
                <div className="font-mono text-sm text-muted-foreground mb-3">
                  <span className="text-primary"></span> Learning
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently expanding my knowledge in penetration testing methodologies, 
                  network security protocols, and secure coding practices. Always eager 
                  to learn and explore new security tools and techniques.
                </p>
              </div>
            </div>

            {/* Learning status */}
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                <span className="font-mono text-sm text-foreground">
                  Status: <span className="text-primary">Actively Learning</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
