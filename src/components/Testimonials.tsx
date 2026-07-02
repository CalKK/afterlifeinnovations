import { ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Julius Butime",
      role: "Dean of School of Computing & Engineering Sciences (SCES)",
      company: "Strathmore University",
      content: "Afterlife Innovation's approach to circular economy is revolutionary. Their partnership with our research department has yielded incredible insights into sustainable battery technologies.",
    },
    {
      name: "Don Victory",
      role: "President & Managing Director",
      company: "Energy Mentors",
      content: "Afterlife Innovations came up with a new energy business model: Repurposing EV batteries that still have capacity after being removed from autos - people in their community can swap them to power bulbs, phones, and fans in their homes. This gets people onto the energy prosperity ladder without needing upfront capital to, for example, install solar panels.",
    },
    {
      name: "Ian Kiprono",
      role: "Chief Operating Officer (COO)",
      company: "Energy Mentors", 
      content: "Afterlife Innovations has demonstrated robust prowess in delivering sound innovations within their market",
    }
  ];

  const partners = [
    { name: "Strathmore University", logo: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/STRATHMORE UNI LOGO.jpeg" },
    { name: "CEPREC", logo: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/CEPREC LOGO.jpeg" },
    { name: "Kilele Accelerator", logo: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/KILELE ACC.png"},
    { name: "10 Billion Strong", logo: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/10 BILLION STRONG.jpeg"},
  ];

  return (
    <section id="testimonials" className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="command-label mb-6">Section 06 - Alliance Network</div>
            <h2 className="section-heading">Trusted by Leaders in Sustainability</h2>
          </div>
          <p className="section-copy">
            From universities to community organizations, our partners are making 
            a real difference with sustainable battery solutions.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="tactical-card">
              <div className="mb-6 flex items-start justify-between gap-4">
                <Quote className="h-8 w-8 text-primary" />
                <p className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Ref-{index + 1}
                </p>
              </div>
              <p className="text-lg italic leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>
              <div className="tactical-divider my-8" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="tactical-title text-xl">{testimonial.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="mt-1 font-mono-display text-xs uppercase tracking-[0.25em] text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-8 tactical-title text-3xl">
            Proud Partners & Collaborators
          </h3>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {partners.map((partner, index) => (
              <div key={index} className="tactical-card flex items-center gap-5 p-5">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-16 object-cover"
                />
                <p className="text-left text-sm font-medium text-innovation">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
