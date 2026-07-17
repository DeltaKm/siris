import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventDatesSection from "@/components/EventDatesSection";
import WhiteNightSection from "@/components/WhiteNightSection";
import ProgramSection from "@/components/ProgramSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventDatesSection />
        <WhiteNightSection />
        <ProgramSection />
        <ExperienceSection />
        <GallerySection />
        <SponsorsSection />
        <LocationSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
