import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import partner1 from "@/assets/partner1.jpg";
import partner2 from "@/assets/partner2.jpg";
import partner3 from "@/assets/partner3.jpg";
import partner4 from "@/assets/partner4.jpg";
import partner5 from "@/assets/partner5.jpg";

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
      role: "Ex-Community Manager",
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
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Testimonials */} 
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            Trusted by Leaders in Sustainability
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From universities to community organizations, our partners are making 
            a real difference with sustainable battery solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-sustainability mb-4" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="font-heading font-semibold text-innovation">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-sustainability font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-semibold text-innovation mb-8">
            Proud Partners & Collaborators
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-cover rounded-lg transition-all duration-300 hover:shadow-lg"
                />
                <p className="text-sm font-medium text-innovation text-center mt-2">
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
