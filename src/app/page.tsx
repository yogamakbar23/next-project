import AboutMe from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyServer from "@/components/MyServer";
import Navbar from "@/components/Navbar";
import Networks from "@/components/Networks";
import WhyDescription from "@/components/WhyDescription";

export default function Home() {
  return (
    <div className="bg-zinc-100 text-black dark:text-white dark:bg-zinc-900">
      <Navbar />
      <Hero />
      <WhyDescription />
      <AboutMe />
      <MyServer />
      <Networks />
      <Footer />
    </div>
  );
}
