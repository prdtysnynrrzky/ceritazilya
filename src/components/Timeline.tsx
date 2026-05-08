"use client";

import { motion } from "framer-motion";

const memories = [
  {
    title: "awal semuanya",
    description: "dari obrolan kecil yang akhirnya jadi kebiasaan setiap hari.",
  },
  {
    title: "jalanan malam",
    description:
      "muter tanpa tujuan sambil cerita banyak hal sampai lupa waktu.",
  },
  {
    title: "momen sederhana",
    description: "ternyata hal-hal kecil justru yang paling ingin diingat.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative px-6 md:px-12 py-28">
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">
            cerita
          </p>

          <h2 className="text-4xl md:text-5xl">beberapa hal kecil</h2>

          <p className="text-neutral-400 mt-6">yang akhirnya jadi berarti.</p>
        </div>

        {/* timeline */}
        <div className="relative space-y-8">
          {/* line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          {memories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative ml-10 rounded-[28px] border border-white/10 bg-white/3 backdrop-blur-md p-8 hover:bg-white/5 transition duration-500"
            >
              {/* dot */}
              <div className="absolute -left-8.5 top-10 w-3 h-3 rounded-full bg-white/40" />

              {/* title */}
              <h3 className="text-2xl md:text-3xl mb-4">{item.title}</h3>

              {/* desc */}
              <p className="text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
