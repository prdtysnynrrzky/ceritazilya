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
        className="text-neutral-500 text-sm tracking-[0.2em] uppercase mb-6"
      >
        cerita kecil yang disimpan
      </motion.p>

      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl text-5xl md:text-7xl leading-[1.1] font-light"
      >
        beberapa foto,
        <br />
        beberapa kenangan.
      </motion.h2>

      {/* description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-8 max-w-xl text-neutral-300 leading-relaxed text-base md:text-lg"
      >
        tidak banyak yang spesial,
        <br />
        tapi selalu ingin diingat.
      </motion.p>

      {/* button */}
      <motion.a
        href="#gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 border border-white/15 px-8 py-3 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition duration-500"
      >
        lihat foto
      </motion.a>
    </section>
  );
}
