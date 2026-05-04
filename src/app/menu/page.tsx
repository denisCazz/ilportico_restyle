import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuPage from "@/components/MenuPage";

export const metadata: Metadata = {
  title: "Menu – Bar Il Portico",
  description: "Cocktail, drinks, birre e vini. Scopri la selezione di Bar Il Portico a Carmagnola.",
};

export default function Menu() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <MenuPage />
      <Footer />
    </main>
  );
}
