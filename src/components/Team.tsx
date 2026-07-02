import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Linkedin, MessageCircle } from "lucide-react";

const Team = () => {
  const teamMembers = [
   /* {
      name: "Morris Murigi",
      role: "CEO",
      bio: "Provides overall vision, leadership, and strategic direction to ensure Afterlife Innovations scales impactfully while fulfilling its mission of powering a circular economy through second-life batteries.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/MORRIS.jpg",
      initials: "MM",
      linkedin: "https://www.linkedin.com/in/morris-murigi-4b412b1b7/",
      whatsapp: "https://wa.me/254792902821"
    }, */
    {
      name: "Andy Onyango",
      role: "COO",
      bio: "Manages day-to-day operations across collection, logistics, refurbishing, and recycling to ensure smooth, cost-effective, and scalable execution of the company's circular processes.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/ANDY.png",
      initials: "AO",
      linkedin: "https://www.linkedin.com/in/andy-onyango-junior-338103249/",
      whatsapp: "https://wa.me/254113643607"
    },
    {
      name: "Calvin Kinyanjui",
      role: "CPO",
      bio: "Oversees the design, development, and lifecycle of repurposed battery products and energy solutions to ensure they meet market needs, regulatory standards, and sustainability goals.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/CALVIN HEADSHOT.jpeg",
      initials: "CK",
      linkedin: "https://www.linkedin.com/in/calvin-kinyanjui-95734222a/",
      whatsapp: "https://wa.me/254796120248"
    },
    {
      name: "Gabriel Musyoki",
      role: "CTO",
      bio: "Leads the technological roadmap, including battery testing, energy management systems, and recycling tech innovations that drive efficiency, safety, and performance.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/GABU.jpg",
      initials: "GM",
      linkedin: "https://www.linkedin.com/in/gabriel-musyoki-aab417220/",
      whatsapp: "https://wa.me/254791578159"
    },
    {
      name: "Jeremy Kering",
      role: "CRO",
      bio: "Plays a pivotal role in driving innovation and ensuring the scientific and technical excellence of all battery repurposing, recycling, and energy storage solutions.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/KERING.jpg",
      initials: "JK",
      linkedin: "https://www.linkedin.com/in/jeremy-kering-a0a5b32a2/",
      whatsapp: "https://wa.me/254714248747"
    }
  ];

  return (
    <section id="team" className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="command-label mb-6">Section 05 - TeamComposition</div>
            <h2 className="section-heading">Meet Our Team</h2>
          </div>
          <p className="section-copy">
            The passionate team driving innovation in sustainable battery solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="tactical-card flex flex-col">
              <div className="mb-6 flex items-start justify-between gap-4">
                <Avatar className="h-24 w-24 border border-primary/35">
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-secondary/10 text-primary text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                </Avatar>
              </div>

              <h3 className="tactical-title text-2xl">
                {member.name}
              </h3>

              <p className="mt-2 font-mono-display text-xs uppercase tracking-[0.3em] text-primary">
                {member.role}
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {member.bio}
              </p>

              <div className="tactical-divider my-8" />

              <div className="mt-auto flex items-center justify-between gap-4">
                <div className="flex gap-3">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center border border-primary/35 bg-secondary/15 text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center border border-primary/35 bg-secondary/15 text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label={`${member.name} WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
