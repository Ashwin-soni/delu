import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FoundersSection from "@/components/FoundersSection";
import RoiEstimator from "@/components/RoiEstimator";
import WorkShowcase from "@/components/WorkShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0a09] text-[#faf7f2] relative selection:bg-[#facc15] selection:text-[#0c0a09]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FoundersSection />
      <RoiEstimator />
      <WorkShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
