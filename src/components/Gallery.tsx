"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const photos = [
  {
    src: "/gallery/1.jpg",
    video: "/gallery/1.mp4",
    caption: "jalanan malam yang selalu bikin tenang..",
  },
  {
    src: "/gallery/2.jpg",
    video: "/gallery/2.mp4",
    caption: "hal kecil yang selalu bikin senyum.",
  },
  {
    src: "/gallery/3.jpg",
    video: "/gallery/3.mp4",
    caption: "terima kasih, selalu ada.",
  },
  {
    src: "/gallery/4.jpg",
    video: "/gallery/4.mp4",
    caption: "bersama, untuk waktu yang lama.",
  },
];

export default function Gallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleEnter = (i: number) => {
    const video = videoRefs.current[i];
    if (video) {
      video.currentTime = 0;
      video.volume = 0.6; // atur volume
      video.play().catch(() => {});
    }
  };

  const handleLeave = (i: number) => {
    const video = videoRefs.current[i];
    if (video) {
      video.pause();
    }
  };

  return (
    <section id="gallery" className="px-6 md:px-12 py-28">
      <div className="max-w-6xl mx-auto">
        {/* heading (TETAP) */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">
            gallery
          </p>

          <h2 className="text-4xl md:text-5xl">beberapa foto</h2>

          <p className="text-neutral-400 mt-6">
            beberapa momen yang ingin terus disimpan.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div
                className="relative aspect-5/7 overflow-hidden rounded-4xl group"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                {/* IMAGE */}
                <Image
                  src={photo.src}
                  alt="memory"
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition duration-700 ease-out
                    group-hover:opacity-0
                    group-hover:scale-105
                  "
                />

                {/* VIDEO (WITH AUDIO NOW ENABLED) */}
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={photo.video}
                  loop
                  playsInline
                  className="
                    absolute inset-0 w-full h-full object-cover
                    opacity-0 group-hover:opacity-100
                    transition duration-500 ease-out
                  "
                />

                {/* overlay */}
                <div
                  className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/40
                  transition duration-500
                "
                />

                {/* caption */}
                <div
                  className="
                  absolute bottom-0 left-0 right-0 p-6
                  translate-y-4 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition duration-500
                "
                >
                  <p className="text-white text-sm leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
