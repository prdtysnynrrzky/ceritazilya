import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Notes from "@/components/Notes";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black" />
        <div className="stars absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <MusicPlayer />
        <Hero />
        <div className="space-y-10 md:space-y-14">
          <Timeline />
          <Gallery />
          <Notes />
        </div>
        <footer className="text-center text-neutral-500 py-16 text-sm leading-relaxed">
          tidak banyak yang spesial,
          <br />
          tapi selalu ingin diingat.
        </footer>
      </div>
    </main>
  );
}
