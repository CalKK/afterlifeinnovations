import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, MessageCircle } from "lucide-react";

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
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate team driving innovation in sustainable battery solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-sustainability/10 text-sustainability text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-innovation mb-1">
                  {member.name}
                </h3>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-3 mb-2">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-sustainability/10 rounded-full flex items-center justify-center hover:bg-sustainability hover:text-sustainability-foreground transition-all duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-sustainability/10 rounded-full flex items-center justify-center hover:bg-sustainability hover:text-sustainability-foreground transition-all duration-200"
                    aria-label={`${member.name} WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-xl font-heading font-bold text-innovation mb-2">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
