"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "/gallery/1.jpg",
    caption: "jalanan malam yang selalu bikin tenang..",
  },
  {
    src: "/gallery/2.jpg",
    caption: "hal kecil yang selalu bikin senyum.",
  },
  {
    src: "/gallery/3.jpg",
    caption: "terima kasih, selalu ada.",
  },
  {
    src: "/gallery/4.jpg",
    caption: "bersama, untuk waktu yang lama.",
  },
];

export default function Gallery() {
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
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* image wrapper */}
              <div className="relative aspect-5/7 overflow-hidden rounded-4xl group">
                {/* image */}
                <Image
                  src={photo.src}
                  alt="memory"
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

                {/* caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
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
