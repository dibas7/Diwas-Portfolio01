import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:sapkotadibas79@gmail.com",
      label: "sapkotadibas79@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/dibas7",
      label: "@dibas7",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dibas-sapkota-6a51b2378/",
      label: "Diwas Sapkota",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            // CONTACT
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mt-2 mb-4">
            <span className="text-primary">&lt;</span>
            Get In Touch
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have questions? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <div className="font-mono text-sm text-muted-foreground mb-6">
                  <span className="text-primary">Contact Me......</span> 
                </div>

                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-primary/10 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-foreground text-sm">
                          {link.name}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">Nepal 🇳🇵</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick message */}
            <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover-glow transition-all">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Send a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-mono text-sm resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover-glow transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                * Contact form for demonstration purposes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
