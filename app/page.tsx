import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TemplateSection from "../components/TemplateSection";
import WhyPetalBloom from "../components/WhyPetalBloom";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <TemplateSection />

      <HowItWorks />

      <WhyPetalBloom />

      <FAQ />

      <Footer />
      
    </main>
  );
}