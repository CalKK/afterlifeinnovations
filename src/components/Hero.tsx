import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const products = [
    {
      name: "Repurposed 18650 Cells",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/18650 cells.jpeg",
      comingSoon: false
    },
    {
      name: "Repurposed Pouch Cells",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/repurposed pouch cells.png",
      comingSoon: false
    },
    {
      name: "10000mAh Power Bank",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/PWB.png",
      comingSoon: false
    },
    {
      name: "Repurposed Battery Energy Storage System(BESS)",
      image: "/placeholder.svg",
      comingSoon: true
    }
  ];

  const scrollToContact = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 fade-in">
            <span className="block">Where Batteries</span>
            <span className="block">Begin Again</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 fade-in max-w-3xl mx-auto">
            Powering Tomorrow with Reclaimed Batteries.
          </p>

          {/* Suave Title Container */}
          <div className="mb-8 p-4 border border-border rounded-lg shadow-md bg-secondary/20 fade-in">
            <h2 className="text-2xl md:text-3xl font-heading text-primary">Afterlife Intelligence has assembled</h2>
          </div>

          {/* Prominent Button Link */}
          <div className="mb-12 fade-in">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              onClick={() => window.open("https://afterlife-intelligence-frontend-production.up.railway.app/inventory", "_blank")}
            >
              Access Battery Intelligence Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 slide-up">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 relative"
              >
                {product.comingSoon && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
                <div className="w-full aspect-square mb-4 rounded-xl overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-4 text-center">{product.name}</h3>
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  disabled={product.comingSoon}
                >
                  {product.comingSoon ? "Coming Soon" : "Enquire Price"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
