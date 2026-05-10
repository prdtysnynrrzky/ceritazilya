"use client";

import { motion } from "framer-motion";

const notes = [
  "padahal hampir tiap hari ketemu, tapi tetep aja pas pulang rasanya masih pengen bareng lagi.",

  "beberapa momen bahkan nggak ada rencana sama sekali, tapi sekarang malah jadi yang paling sering diingat.",

  "kadang niatnya cuma lihat satu foto, ujung-ujungnya malah nostalgia lama di galeri.",

  "ternyata banyak kenangan yang datang dari hari-hari yang dulu terasa biasa aja.",
];

export default function Notes() {
  return (
    <section id="notes" className="px-6 md:px-12 py-28">
      <div className="max-w-4xl mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">
            catatan
          </p>

          <h2 className="text-4xl md:text-5xl">
            beberapa hal yang masih keingat
          </h2>

          <p className="text-neutral-400 mt-6">
            sebagian kecil dari banyak hal
            <br />
            yang pernah lewat begitu aja.
          </p>
        </div>

        {/* notes */}
        <div className="space-y-6">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                border border-white/10
                rounded-[28px]
                bg-white/[0.03]
                backdrop-blur-md
                p-8
              "
            >
              <p className="text-lg leading-relaxed text-neutral-200">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
