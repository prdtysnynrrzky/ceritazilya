import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Notes from "@/components/Notes";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src="/bg.jpg"
          alt="background"
          fill
          priority
          className="object-cover float-bg scale-105"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

        {/* cinematic radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="stars absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <div className="space-y-10 md:space-y-16">
          <Timeline />
          <Gallery />
          <Notes />
        </div>

        <footer className="text-center text-neutral-500 py-24 px-6">
          <p className="text-sm leading-relaxed">
            semoga nanti masih banyak
            <br />
            foto dan cerita lain yang bisa disimpan.
          </p>

          <div className="w-12 h-px bg-white/10 mx-auto my-8" />

          <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-600">
            untuk sayangkuu cintakuu cantikuu semestakuu kesayangankuu
            Nadzillah💖
          </p>
        </footer>
      </div>
    </main>
  );
}
