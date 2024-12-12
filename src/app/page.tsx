import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyServer from "@/components/MyServer";
import Navbar from "@/components/Navbar";
import WhyDescription from "@/components/WhyDescription";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyDescription />
      <MyServer />
      <Footer />
    </>
  );
}
