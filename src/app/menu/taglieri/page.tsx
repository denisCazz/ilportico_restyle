import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TaglieriPage from "@/components/TaglieriPage";

export const metadata: Metadata = {
  title: "I Nostri Taglieri – Bar Il Portico",
  description: "Taglieri di salumi, formaggi e focaccia romana. Ingredienti selezionati al Bar Il Portico di Carmagnola.",
};

export default function Taglieri() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <TaglieriPage />
      <Footer />
    </main>
  );
}
