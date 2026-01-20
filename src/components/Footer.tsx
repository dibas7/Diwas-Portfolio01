import { Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-foreground">
              <span className="text-primary">&lt;</span>
              Diwas Sapkota
              <span className="text-primary">/&gt;</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            © {currentYear} • @Diwas Sapkota{" "}
           
          </p>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-xs text-muted-foreground">
              System Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
