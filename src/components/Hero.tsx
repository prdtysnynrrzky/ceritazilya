"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
      {/* small text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
          text-neutral-500
          text-[11px]
          tracking-[0.35em]
          uppercase
          mb-8
        "
      >
        cerita kecil yang disimpan
      </motion.p>

      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          max-w-4xl
          text-5xl
          md:text-7xl
          leading-[1]
          tracking-[-0.05em]
          font-light
        "
      >
        beberapa foto,
        <br />
        beberapa kenangan.
      </motion.h1>

      {/* desc */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="
          mt-8
          text-neutral-400
          text-base
          md:text-lg
          leading-relaxed
        "
      >
        tidak banyak yang spesial,
        <br />
        tapi tetap ingin disimpan.
      </motion.p>

      {/* button */}
      <motion.a
        href="#gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
          mt-10
          border border-white/10
          px-8 py-3
          rounded-full
          text-sm
          text-neutral-200
          hover:bg-white
          hover:text-black
          transition duration-500
        "
      >
        lihat foto
      </motion.a>
    </section>
  );
}
