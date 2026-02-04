import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/p/DMXymXTMy9C/?igsh=bzkzcDRuaGt1d3Zt", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/afterlife-innovations/?viewAsMember=true", label: "LinkedIn" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "afterlifebatteries@gmail.com",
      href: "mailto:afterlifebatteries@gmail.com"
    }, 
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+254 792 902 821",
      href: "https://wa.me/254792902821"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 792 902 821",
      href: "tel:+254792902821"
    },
  ];

  return (
    <footer id="contact" className="bg-innovation text-innovation-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
               <img 
                 src="https://raw.githubusercontent.com/CalKK/afterlife-innovations-web/main/images/AFTERLIFE INNOVATIONS LOGO.png" 
                 alt="Afterlife Innovations Logo" 
                 className="w-10 h-10 rounded-full" 
                 />
              <h3 className="text-3xl font-heading font-bold">Afterlife Innovations</h3>
            </div>
            
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Where Batteries Begin Again.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 hover:text-sustainability transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-sustainability/10 rounded-lg flex items-center justify-center group-hover:bg-sustainability/20 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-sustainability" />
                  </div>
                  <div>
                    <p className="text-sm opacity-75">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-sustainability/10 rounded-lg flex items-center justify-center hover:bg-sustainability hover:text-sustainability-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-sustainability">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li><a href="#home" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">Home</a></li>
                <li><a href="#about" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">About</a></li>
                <li><a href="#products" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">Products</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-sustainability">
                Company
              </h4>
              <ul className="space-y-3">
                <li><a href="#team" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">Team</a></li>
                <li><a href="#testimonials" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-sustainability">
                Resources
              </h4>
              <ul className="space-y-3">
                <li><a href="#resources" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">Features & Awards</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">Battery Safety</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-sustainability">
                Support
              </h4>
              <ul className="space-y-3">
                <li><a href="#contact" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-sustainability/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="opacity-75 text-center md:text-left">
              © 2024 Afterlife Innovations. All rights reserved. Building a sustainable tomorrow.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">
                Privacy Policy
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">
                Terms of Service
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
