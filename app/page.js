import ColorRange from "@/components/ColorRange";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-neutral-950 min-h-screen pb-16 overflow-clip">
        <ColorRange/>
      </div>
    </main>
  );
}
