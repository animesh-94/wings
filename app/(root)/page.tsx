import About from "@/components/about";
import Events from "@/components/events";
import Footer from "@/components/footer";
import Guests from "@/components/guests";
import Hero from "@/components/hero";
import FloatingImage from "@/components/story";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      {/* <FloatingImage /> */}
      <About />
      <Events />
      <Guests />
    </main>
  );
}
