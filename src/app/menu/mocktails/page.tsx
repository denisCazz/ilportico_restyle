import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MocktailsPage from "@/components/MocktailsPage";

export const metadata: Metadata = {
  title: "Mocktails – Bar Il Portico",
  description: "Cocktail analcolici di carattere. I nostri mocktails al Bar Il Portico di Carmagnola.",
};

export default function Mocktails() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <MocktailsPage />
      <Footer />
    </main>
  );
}
