import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurServer from "@/components/OurServer";
import Navbar from "@/components/Navbar";
import Networks from "@/components/Networks";
import Advantages from "@/components/Advantages";
import FadeSection from "@/components/utils/FadeSection";
import ParticlesComponent from "@/components/utils/particles.jsx";

export default function Home() {
  return (
    <div className="bg-zinc-100 text-black dark:text-white dark:bg-zinc-900">
      <Navbar />
      <ParticlesComponent id="particles" />
      <Hero />
      <FadeSection>
        <Advantages />
      </FadeSection>
      <FadeSection>
        <OurServer />
      </FadeSection>
      <FadeSection>
        <Networks />
      </FadeSection>
      <FadeSection>
        <Footer />
      </FadeSection>
    </div>
  );
}
