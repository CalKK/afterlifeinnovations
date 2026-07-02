import { Activity, Cpu, Leaf, ShieldCheck, Target, Zap } from "lucide-react";

const About = () => {
  const focusAreas = [
    {
      icon: Target,
      code: "01 // Vision",
      title: "Our Vision",
      text: "Zero battery waste through complete circular economy solutions",
    },
    {
      icon: Zap,
      code: "02 // Innovation",
      title: "Innovation",
      text: "Pioneering technologies in battery testing and repurposing",
    },
    {
      icon: ShieldCheck,
      code: "03 // Quality",
      title: "Quality",
      text: "Rigorous testing ensures reliable, safe second-life products",
    },
    {
      icon: Leaf,
      code: "04 // Impact",
      title: "Impact",
      text: "Measurable environmental benefits through waste reduction",
    },
    {
      icon: Activity,
      code: "05 // Collection",
      title: "Collect & Test",
      text: "Source end-of-life batteries and assess remaining capacity with comprehensive testing.",
    },
    {
      icon: Cpu,
      code: "06 // Deployment",
      title: "Refurbish & Deploy",
      text: "Rebuild viable cells into dependable second-life products for real-world energy access.",
    },
  ];

  return (
    <section id="about" className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="command-label mb-6">Section 02 - Anatomy</div>
            <h2 className="section-heading">About Us</h2>
          </div>
          <p className="section-copy">
            We transform discarded batteries into powerful, sustainable energy solutions for a circular economy.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="tactical-card">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="command-label">Mission Directive</div>
              <p className="font-mono-display text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Status: Active
              </p>
            </div>
            <h3 className="tactical-title text-3xl md:text-4xl">
              Our Mission
            </h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Afterlife Innovations Limited is a Kenyan clean-tech startup offering Battery Analytics as a Service (BAaaS) to extend lithium battery life.
              Our advanced data models assess battery health and degradation, enabling energy providers, recyclers, and manufacturers to make informed decisions on reuse, replacement, and end-of-life management. 
              We identify batteries suitable for second-life applications, forecasting lifespan and recommending efficient reuse strategies. Repurposed batteries are integrated into affordable energy storage systems, supporting backup power and off-grid solutions for homes, small businesses, and microgrids. 
              Our mission is to maximize battery value and promote sustainable energy access through intelligent analytics and reuse.
            </p>
          </div>

          <div className="tactical-card">
            <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Operational Premise
            </p>
            <h3 className="mt-6 tactical-title text-2xl">
              What We Do
            </h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">Collect & Test</p>
                <p className="mt-2 text-lg text-muted-foreground">Source end-of-life batteries and perform comprehensive testing to assess remaining capacity.</p>
              </div>
              <div>
                <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">Refurbish & Repurpose</p>
                <p className="mt-2 text-lg text-muted-foreground">Refurbish viable batteries and integrate them into new sustainable energy products.</p>
              </div>
              <div>
                <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">Deploy & Impact</p>
                <p className="mt-2 text-lg text-muted-foreground">Deliver high-quality second-life products that reduce waste and provide clean energy.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.code} className="tactical-card">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center border border-primary/35 bg-secondary/20 text-primary">
                  <area.icon className="h-6 w-6" />
                </div>
                <p className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {area.code}
                </p>
              </div>
              <h4 className="tactical-title text-2xl">{area.title}</h4>
              <p className="mt-5 text-lg text-muted-foreground">{area.text}</p>
              <div className="tactical-divider my-8" />
              <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">
                Status: Nominal
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
