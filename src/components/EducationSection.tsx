import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const EducationSection = () => {
  const certifications = [
    "Introduction to Cyber Security (In Progress)",
    "Networking Fundamentals",
    "Web Application Security Basics",
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            // Education
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mt-2 mb-4">
            <span className="text-primary">&lt;</span>
            Academic Journey
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Current Education */}
          <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover-glow transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-mono">
                    Current
                  </span>
                </div>

                <h3 className="font-mono text-xl font-semibold text-foreground mb-2">
                  Computer Engineering
                </h3>
                
                <p className="text-lg text-secondary font-mono mb-4">Grade 11</p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Nepal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2026 - Present</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-primary/20">
                  <h4 className="font-mono text-sm text-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Key Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Computer Science", "Mathematics", "Physics", "Electronics"].map(
                      (subject) => (
                        <span
                          key={subject}
                          className="text-xs font-mono px-3 py-1 rounded-full border border-primary/30 text-muted-foreground"
                        >
                          {subject}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Learning */}
          <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover-glow transition-all">
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary"></span> Certifications
            </div>

            <h3 className="font-mono text-xl font-semibold text-foreground mb-6">
              Self-Learning & Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-primary/10"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-mono">{index + 1}</span>
                  </div>
                  <span className="text-foreground text-sm">{cert}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-secondary font-mono">💡 Note:</span> Continuously 
                expanding knowledge through online platforms like TryHackMe, HackTheBox, 
                and various YouTube tutorials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
