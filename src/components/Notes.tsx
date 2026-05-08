"use client";

import { motion } from "framer-motion";

const notes = [
  "aku masih inget cara kamu ketawa waktu itu.",
  "jalanan malam selalu terasa lebih cepat sama kamu.",
  "kadang obrolan random justru paling bikin tenang.",
  "ternyata nyaman bisa sesederhana itu.",
];

export default function Notes() {
  return (
    <section id="notes" className="px-6 md:px-12 py-28">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">
            catatan
          </p>

          <h2 className="text-4xl md:text-5xl">catatan kecil</h2>

          <p className="text-neutral-400 mt-6">
            beberapa hal sederhana yang masih diingat.
          </p>
        </div>

        {/* notes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
              }}
              className="rounded-[28px] border border-white/10 bg-white/3 backdrop-blur-md p-8 transition duration-500 hover:bg-white/5"
            >
              <p className="text-lg leading-relaxed text-neutral-200">{note}</p>

              <div className="mt-10 w-10 h-px bg-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
