import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Morris Murigi",
      role: "CEO",
      bio: "Provides overall vision, leadership, and strategic direction to ensure Afterlife Innovations scales impactfully while fulfilling its mission of powering a circular economy through second-life batteries.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/MORRIS.jpg",
      initials: "MM"
    },
    {
      name: "Andy Onyango",
      role: "COO",
      bio: "Manages day-to-day operations across collection, logistics, refurbishing, and recycling to ensure smooth, cost-effective, and scalable execution of the company’s circular processes.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/ANDY.png",
      initials: "AO"
    },
    {
      name: "Calvin Kinyanjui",
      role: "CPO",
      bio: "Oversees the design, development, and lifecycle of repurposed battery products and energy solutions to ensure they meet market needs, regulatory standards, and sustainability goals.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/CALVIN HEADSHOT.jpeg",
      initials: "CK"
    },
    {
      name: "Gabriel Musyoki",
      role: "CTO",
      bio: "Leads the technological roadmap, including battery testing, energy management systems, and recycling tech innovations that drive efficiency, safety, and performance.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/GABU.jpg",
      initials: "GM"
    },
    {
      name: "Jeremy Kering",
      role: "CRO",
      bio: "Plays a pivotal role in driving innovation and ensuring the scientific and technical excellence of all battery repurposing, recycling, and energy storage solutions.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/KERING.jpg",
      initials: "JK"
    }
   /* {
      name: "Janet Mbugua",
      role: "CFO",
      bio: "Directs financial planning, budgeting, and funding strategies to sustain growth, ensure compliance, and support investments in clean technology and infrastructure.",
      image: "https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/JANET.jpg",
      initials: "JM" 
    } */
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
                
                <h3 className="text-xl font-heading font-bold text-innovation mb-2">
                  {member.name}
                </h3>
                
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
