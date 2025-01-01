import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Servers from "@/components/Servers";
import Navbar from "@/components/Navbar";
import Networks from "@/components/Networks";
import Advantages from "@/components/Advantages";
import FadeSection from "@/components/utils/FadeSection";
import ParticlesComponent from "@/components/utils/particles.jsx";

export default function Home() {
  return (
    <div className="bg-zinc-100 text-black dark:text-white dark:bg-zinc-900">
      <Navbar />
      <div className="flex relative h-screen justify-center items-center">
        <ParticlesComponent id="particles" />
        <FadeSection>
          <Hero />
        </FadeSection>
      </div>
      <FadeSection>
        <Advantages />
      </FadeSection>
      <FadeSection>
        <Servers />
      </FadeSection>
      <FadeSection>
        <Networks />
      </FadeSection>
      <Footer />
    </div>
  );
}
