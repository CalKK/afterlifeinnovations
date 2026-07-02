import { ArrowRight, Instagram, Linkedin, Lock, Mail, MessageCircle, Phone, Zap } from "lucide-react";

const Footer = () => {

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/p/DMXymXTMy9C/?igsh=bzkzcDRuaGt1d3Zt", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/afterlife-innovations/?viewAsMember=true", label: "LinkedIn" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "afterlifebatteries@gmail.com",
      href: "mailto:afterlifebatteries@gmail.com"
    }, 
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+254 792 902 821",
      href: "https://wa.me/254792902821"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 792 902 821",
      href: "tel:+254792902821"
    },
  ];

  return (
    <footer id="contact" className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="tactical-panel p-8 md:p-12">
          <div className="mx-auto max-w-6xl">
            <div className="command-label mb-8">Engagement Panel</div>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
              <div>
                <h2 className="section-heading text-5xl md:text-7xl">
                  <span className="block text-innovation">Request</span>
                  <span className="block text-primary">Classified</span>
                  <span className="block text-innovation">Enquiry</span>
                </h2>
                <p className="mt-8 max-w-3xl text-xl text-muted-foreground md:text-[2rem]/[1.4]">
                  Where Batteries Begin Again.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="mailto:afterlifebatteries@gmail.com">
                    <button className="inline-flex h-14 min-w-[280px] items-center justify-between border border-primary bg-primary px-8 font-mono-display text-sm uppercase tracking-[0.28em] text-primary-foreground transition-all duration-200 hover:bg-primary/90">
                      <span className="inline-flex items-center gap-3">
                        <Lock className="h-4 w-4" />
                        Write to us
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </a>
                </div>
              </div>

              <div className="tactical-card bg-white/60">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-primary/35 bg-secondary/20 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="tactical-title text-2xl">Afterlife Innovations</h3>
                    <p className="mt-2 font-mono-display text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                      Battery Intel // Circular Economy
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground">
                  Where Batteries Begin Again.
                </p>

                <div className="mt-8 space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between gap-4 border border-border/80 px-4 py-4 transition-colors duration-200 hover:border-primary/45 hover:bg-secondary/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center border border-primary/35 bg-secondary/15 text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-mono-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{item.label}</p>
                          <p className="text-lg text-innovation">{item.value}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex h-11 w-11 items-center justify-center border border-primary/35 bg-secondary/15 text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 border-t border-border/80 pt-8 md:grid-cols-3">
              <div>
                <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">Navigation</p>
                <div className="mt-4 flex flex-col gap-3 text-muted-foreground">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#products">Products</a>
                </div>
              </div>
              <div>
                <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">Company</p>
                <div className="mt-4 flex flex-col gap-3 text-muted-foreground">
                  <a href="#team">Team</a>
                  <a href="#testimonials">Testimonials</a>
                  <a href="#resources">Features & Awards</a>
                </div>
              </div>
              <div>
                <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">Legal</p>
                <div className="mt-4 flex flex-col gap-3 text-muted-foreground">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Cookie Policy</a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border/80 pt-6">
              <p className="text-center text-muted-foreground md:text-left">
                © 2024 Afterlife Innovations. All rights reserved. Building a sustainable tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
