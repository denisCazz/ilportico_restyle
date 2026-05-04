import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuTeaser from "@/components/MenuTeaser";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EventiTeaser from "@/components/EventiTeaser";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MenuTeaser />
      <EventiTeaser />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

