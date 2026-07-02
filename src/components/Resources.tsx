import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const blogPosts = [
    {
      title: "Giving Batteries a Second Life",
      image: "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://strathmore.edu/news-articles/giving-batteries-a-second-life/",
      category: "Innovation",
      excerpt: "Discover how we're transforming discarded batteries into valuable resources.",
      date: "July 2025"
    },
    {
      title: "Strathmore Innovators transform E-waste into opportunities",
      image: "https://plus.unsplash.com/premium_photo-1681433419747-f5c114430ab5?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://strathmore.edu/news-articles/strathmore-innovators-transform-e-waste-into-opportunities/",
      category: "Innovation",
      excerpt: "Learn about our innovative approach to e-waste transformation.",
      date: "July 2024"
    },
    {
      title: "Distinguished Design Award",
      image: "https://images.unsplash.com/flagged/photo-1587096472434-8b65b343980d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.energymentors.org/ptc-winners-2025",
      category: "Innovation",
      excerpt: "Celebrating our recognition for outstanding design innovation.",
      date: "June 2025"
    },
    {
      title: "Afterlife Innovations x CEPREC",
      image: "https://plus.unsplash.com/premium_photo-1716999684531-b8f40731a827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1pY3JvZ3JpZCUyMGJhdHRlcnklMjBpbm5vdmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://sbs.strathmore.edu/from-discarded-battery-cells-to-clean-circular-energy-solutions-ceprec-meets-with-afterlife-innovations",
      category: "Research",
      excerpt: "Exploring collaborative avenues with industry players.",
      date: "August 2025"
    },
  ];

  const videos = [
    {
      title: "Power The Community Victors Interview",
      thumbnail: "https://images.unsplash.com/photo-1550496923-a0e3ef948e3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxiYXR0ZXJ5JTIwaW5ub3ZhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      link: "https://youtu.be/mYTZQqUBzC4",
      description: "Interview with our team about winning the Power The Community competition."
    },
    {
      title: "Energy Mentors Award",
      thumbnail: "https://plus.unsplash.com/premium_photo-1716824502431-b93e3756a6aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://youtu.be/qgE5EDjO2cA",
      description: "Highlights from receiving the Energy Mentors Award."
    },
    {
      title: "Inspiring the future generation",
      thumbnail: "https://plus.unsplash.com/premium_photo-1683120793196-0797cec08a7d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://youtu.be/-QoRN-DgZ5U",
      description: "Powerful counsel from the Founder & President of Energy Mentors."
    }
  ];

  return (
   <section id="resources" className="py-10 md:py-14">
  <div className="container mx-auto px-4">
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="command-label mb-6">Section 07 - Media Archive</div>
        <h2 className="section-heading">Features & Accolades</h2>
      </div>
      <p className="section-copy">
        Preview some of our accolades, accomplishments & features. 
      </p>
    </div>

    <div className="mb-12">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="tactical-title text-3xl">
          Find them
        </h3>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="tactical-card overflow-hidden p-0">
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />

            <div className="p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">
                  {post.category}
                </span>
                <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {post.date}
                </span>
              </div>

              <h4 className="tactical-title text-2xl line-clamp-2">
                {post.title}
              </h4>

              <p className="mt-4 text-base text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>

              <div className="tactical-divider my-6" />

              <Button
                variant="outline"
                size="sm"
                className="w-full justify-between"
                onClick={() => window.open(post.link, "_blank")}
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div> 

    <div className="mb-12">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="tactical-title text-3xl">
          Videos
        </h3>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video, index) => (
          <div key={index} className="tactical-card overflow-hidden p-0">
            <div className="relative">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${video.thumbnail})` }} />
              <div className="absolute inset-0 flex items-center justify-center bg-innovation/20">
                <Button
                  size="icon"
                  className="border-primary bg-primary"
                  onClick={() => window.open(video.link, "_blank")}
                >
                  <Play className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">
                  Media
                </span>
              </div>
              <h4 className="tactical-title text-2xl line-clamp-2">
                {video.title}
              </h4>
              <p className="mt-4 text-base text-muted-foreground line-clamp-3">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default Resources;
