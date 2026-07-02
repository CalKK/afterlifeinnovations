import { ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      icon: Smartphone,
      title: "Portable Second-life Power Banks",
      description: "High-capacity power banks built from repurposed lithium batteries, perfect for consumers who need reliable mobile charging.",
      features: ["10,000mAh capacity", "Fast charging technology", "Eco-friendly construction"],
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/PWB.png"
    },
    /*
    {
    
      icon: Car,
      title: "E-bike Battery Packs",
      description: "Sustainable battery solutions for electric bicycles, combining performance with environmental responsibility.",
      features: ["36V/48V options", "50km+ range", "Waterproof design", "Smart BMS system"],
      price: "From $299",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      icon: Home,
      title: "Home Energy Storage",
      description: "Residential energy storage systems that help families reduce grid dependency while supporting sustainability.",
      features: ["10-20kWh capacity", "Grid-tie capability", "Mobile app control", "10-year lifespan"],
      price: "From $2,499",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      icon: Factory,
      title: "Industrial Solutions",
      description: "Custom battery systems for businesses, NGOs, and industrial applications requiring reliable, sustainable power.",
      features: ["Custom configurations", "Scalable design", "Professional installation", "24/7 monitoring"],
      price: "Contact us",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
    */
  ];
  return (
    <section id="products" className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="command-label mb-6">Section 04 - Product Systems</div>
            <h2 className="section-heading">Sustainable Power Solutions</h2>
          </div>
          <p className="section-copy">
            Our flagship second-life powerbank 
          </p>
        </div>

        <div className="grid gap-8">
          {products.map((product, index) => (
            <div key={index} className="tactical-card grid gap-8 overflow-hidden lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
              <div className="overflow-hidden border border-border bg-muted/50">
                <img
                  src={product.image} 
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-primary/35 bg-secondary/20 text-primary">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <p className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    v{index + 1.0} // Product
                  </p>
                </div>

                <h3 className="tactical-title text-3xl">{product.title}</h3>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <div className="tactical-divider my-8" />

                <div className="space-y-3">
                  <h4 className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-lg text-muted-foreground">
                        <div className="h-2 w-2 bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button className="justify-between sm:min-w-[240px]" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                    Request Pricing
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
