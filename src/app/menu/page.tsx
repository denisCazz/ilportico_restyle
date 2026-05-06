import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MenuPage from "@/components/MenuPage";

export const metadata: Metadata = {
  title: "Menu – Bar Il Portico",
  description: "Taglieri, mocktails, cocktail e birre. Scopri la selezione di Bar Il Portico a Carmagnola.",
};

export default function Menu() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <MenuPage />
    </main>
  );
}
