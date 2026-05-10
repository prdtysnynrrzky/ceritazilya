"use client";

import { motion } from "framer-motion";

const memories = [
  {
    number: "01",
    title: "obrolan yang keterusan",
    description:
      "awalnya cuma ngobrol biasa, terus lama-lama jadi bagian dari hari.",
  },

  {
    number: "02",
    title: "jalanan malam",
    description:
      "muter tanpa tujuan, mencoba ngobrol di jalan walau haheho, dan pulang hampir subuh.",
  },

  {
    number: "03",
    title: "jadi kebiasaan",
    description:
      "nonton, makan, jalan, foto random, ternyata pelan-pelan jadi bagian dari hari biasa.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 md:px-12 py-32">
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <div className="mb-24 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">
            cerita
          </p>

          <h2 className="text-4xl md:text-5xl">beberapa hal yang terjadi</h2>

          <p className="text-neutral-400 mt-6 leading-relaxed">
            hal-hal kecil yang awalnya terasa biasa,
            <br />
            ternyata malah terus diingat.
          </p>
        </div>

        {/* timeline */}
        <div className="space-y-28">
          {memories.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className={`
                grid md:grid-cols-2 gap-10 items-start
                ${index % 2 !== 0 ? "md:text-right" : ""}
              `}
            >
              {/* left */}
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-neutral-600 mb-5">
                  {item.number}
                </p>

                <h3 className="text-3xl md:text-5xl leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* right */}
              <div>
                <p className="text-neutral-300 leading-loose text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
