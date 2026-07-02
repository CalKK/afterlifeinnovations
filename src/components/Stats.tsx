import { TrendingUp, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "100",
      label: "Kgs of Lithium Waste",
      description: "That we have been able to collect."
    },/*
    {
      icon: Zap,
      number: "85%",
      label: "Energy Recovery Rate",
      description: "From repurposed batteries through our innovative ecosystem engines"
    },*/
    /*{
      icon: Globe,
      number: "2.5T",
      label: "CO₂ Emissions Saved",
      description: "Per thousand batteries to be recycled through our processes"
    },*/
    {
      icon: Users,
      number: "1K+",
      label: "Community Members",
      description: "To actively participating in our battery collection programs"
    },    
  ];

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="command-label mb-6">Section 03 - Field Metrics</div>
            <h2 className="section-heading">Our Traction</h2>
          </div>
          <p className="section-copy">
            Our impact extends beyond technology - we're building a sustainable future 
            with measurable environmental and social benefits.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="tactical-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center border border-primary/35 bg-secondary/20 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Metric {index + 1}
                </p>
              </div>

              <div className="text-5xl text-primary md:text-6xl">
                {stat.number}
              </div>

              <h3 className="mt-4 tactical-title text-2xl">
                {stat.label}
              </h3>

              <p className="mt-4 text-lg text-muted-foreground">
                {stat.description}
              </p>
              <div className="tactical-divider my-8" />
              <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">
                Status: Verified
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
