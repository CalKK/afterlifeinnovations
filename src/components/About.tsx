import { Battery, Recycle, Leaf, Target, Lightbulb, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We transform discarded batteries into powerful, sustainable energy solutions for a circular economy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold text-innovation">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">Afterlife Innovations unlocks the second life of every battery. Through collecting, repurposing, and recycling cells from EVs to smartphones we transforming waste into ready-to-use energy solutions. 
              We combat environmental degradation by diverting toxic e-waste and recovering valuable materials. 
              Simultaneously, we address energy poverty by engineering repurposed battery packs for off-grid mini-grids, bringing power to communities beyond national infrastructure. 
              By ensuring every cell is reused or responsibly recycled, we abide by a simple promise: no battery is left behind, fueling a truly circular economy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <h4 className="font-heading font-semibold text-innovation mb-2">Our Vision</h4>
              <p className="text-sm text-muted-foreground">
                Zero battery waste through complete circular economy solutions
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <h4 className="font-heading font-semibold text-innovation mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Pioneering technologies in battery testing and repurposing
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <h4 className="font-heading font-semibold text-innovation mb-2">Quality</h4>
              <p className="text-sm text-muted-foreground">
                Rigorous testing ensures reliable, safe second-life products
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <h4 className="font-heading font-semibold text-innovation mb-2">Impact</h4>
              <p className="text-sm text-muted-foreground">
                Measurable environmental benefits through waste reduction
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-innovation mb-4">
            What We Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-innovation">Collect & Test</h4>
              <p className="text-sm text-muted-foreground">
                Source end-of-life batteries and perform comprehensive testing to assess remaining capacity
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-innovation">Refurbish & Repurpose</h4>
              <p className="text-sm text-muted-foreground">
                Refurbish viable batteries and integrate them into new sustainable energy products
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-innovation">Deploy & Impact</h4>
              <p className="text-sm text-muted-foreground">
                Deliver high-quality second-life products that reduce waste and provide clean energy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
