import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
          <div className="logo-container">
              <a href="https://github.com/afterlifeinnovations/afterlife-innovations-web" className="flex h-12 w-12 items-center justify-center border border-primary/45 bg-secondary/15 text-primary" aria-label="GitHub Repository">
                  <img src="https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/AFTERLIFE INNOVATIONS LOGO.png" alt="Afterlife Innovations Logo" className="h-8 w-8" />
              </a>
          </div>
          <div className="leading-none">
            <a href="#home" className="block text-2xl text-primary md:text-3xl">
              Afterlife Innovations
            </a>
            <p className="mt-2 font-mono-display text-[10px] uppercase tracking-[0.42em] text-muted-foreground md:text-xs">
              Battery Intel // Circular Economy
            </p>
          </div>
          </div>

          <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono-display text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Request Enquiry
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          </div>

          {isMenuOpen && (
          <nav className="mt-4 border-t border-border lg:hidden">
          <div className="flex flex-col gap-4 pb-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono-display text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-200 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Button
                size="sm"
                className="justify-start"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request Enquiry
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          </nav>
          )}
      </div>
    </header>
  );
};

export default Header;
