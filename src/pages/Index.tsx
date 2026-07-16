import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats"; 
import Products from "@/components/Products";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/ui/TargetCursor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TargetCursor />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Products />
      <Team />
      <Testimonials />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
