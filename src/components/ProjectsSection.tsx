import React from "react";
import { ExternalLink, Github, Shield, Globe, Server } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  type: string;
}

const projects: Project[] = [
  {
    title: "Martech CRM",
    description:
      "Devlop a Customer Relationship Management system using Scripting Languages and Gains HandaExperiance.",
    tags: ["CRM", "Code", "Script"],
    icon: Globe,
    type: "Web Development",
  },
  
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built to showcase skills and projects. Features modern design with cyber security theme.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    type: "Web Development",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            // PROJECTS
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mt-2 mb-4">
            <span className="text-primary">&lt;</span>
            My Work
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Learning projects and experiments in cyber security and web development
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cyber-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden hover-glow transition-all"
            >
              {/* Project header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded bg-muted">
                    {project.type}
                  </span>
                </div>

                <h3 className="font-mono text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project footer */}
              <div className="px-6 py-4 border-t border-primary/10 flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="font-mono">Code</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-mono">Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More projects coming */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-muted/50 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
            <span className="font-mono text-sm text-muted-foreground">
              More projects in development...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
