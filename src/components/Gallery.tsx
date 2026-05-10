"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

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
  const [activeMobile, setActiveMobile] = useState<number | null>(null);

  const handleEnter = (i: number) => {
    const video = videoRefs.current[i];

    if (video) {
      video.currentTime = 0;
      video.volume = 0.6;
      video.play().catch(() => {});
    }
  };

  const handleLeave = (i: number) => {
    const video = videoRefs.current[i];

    if (video) {
      video.pause();
    }
  };

  const handleMobile = (i: number) => {
    const video = videoRefs.current[i];

    if (!video) return;

    // pause video lain
    videoRefs.current.forEach((v, index) => {
      if (v && index !== i) {
        v.pause();
      }
    });

    // toggle current
    if (activeMobile === i) {
      video.pause();
      setActiveMobile(null);
    } else {
      video.currentTime = 0;
      video.volume = 0.6;

      video.play().catch(() => {});
      setActiveMobile(i);
    }
  };

  return (
    <section id="gallery" className="px-6 md:px-12 py-28">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
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
                className="relative aspect-[5/7] overflow-hidden rounded-4xl group"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
                onClick={() => handleMobile(i)}
              >
                {/* IMAGE */}
                <Image
                  src={photo.src}
                  alt="memory"
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`
                    object-cover
                    transition duration-700 ease-out

                    group-hover:opacity-0
                    group-hover:scale-105

                    ${
                      activeMobile === i ? "opacity-0 scale-105" : "opacity-100"
                    }
                  `}
                />

                {/* VIDEO */}
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={photo.video}
                  loop
                  playsInline
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition duration-500 ease-out

                    group-hover:opacity-100

                    ${activeMobile === i ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* overlay */}
                <div
                  className={`
                    absolute inset-0
                    transition duration-500

                    group-hover:bg-black/40

                    ${activeMobile === i ? "bg-black/40" : "bg-black/0"}
                  `}
                />

                {/* caption */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0 p-6
                    transition duration-500

                    group-hover:translate-y-0
                    group-hover:opacity-100

                    ${
                      activeMobile === i
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }
                  `}
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
