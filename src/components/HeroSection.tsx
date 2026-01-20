import { useEffect, useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Future Security Expert & Aspiring Ethical Hacker";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
         {/* {/* Terminal-style header
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-8 fade-in-up">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary"> I Am</span> 
            </span> */}
          
          

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4 fade-in-up stagger-1">
            <span className="text-foreground">Diwas</span>{" "}
            <span className="text-primary cyber-glow-text">Sapkota</span>
          </h1>

          {/* Animated title */}
          <div className="h-12 md:h-16 mb-6 fade-in-up stagger-2">
            <h2 className="text-xl md:text-3xl font-mono text-secondary">
              {displayText}
              <span className="terminal-cursor" />
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 fade-in-up stagger-3">
            Computer Engineering Student | Grade 11
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up stagger-4">
            Passionate about{" "}
            <span className="text-primary">ethical hacking</span>,{" "}
            <span className="text-secondary">network security</span>, and{" "}
            <span className="text-primary">IT innovation</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-5">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover-glow transition-all hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-primary/50 text-primary font-mono font-semibold rounded-lg hover:bg-primary/10 transition-all"
            >
              View Projects
            </a>
          </div>

          {/* Location badge */}
          <div className="mt-12 fade-in-up stagger-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Based in Nepal 🇳🇵
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
