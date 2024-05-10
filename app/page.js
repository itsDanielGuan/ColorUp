import ColorRange from "@/components/ColorRange";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <Header/>
        <div className="bg-neutral-950 min-h-screen">
          <Hero/>
          <ColorRange/>
        </div>
      </div>
    </main>
  );
}
