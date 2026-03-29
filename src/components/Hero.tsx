"use client";

import { motion, Variants } from "framer-motion";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-rice-paper">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop"
          alt="Fresh Tropical Fruits"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105"
          style={{ transform: "translateZ(-1px) scale(1.5)" }} // simple parallax illusion setup
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rice-paper via-rice-paper/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item} className="inline-block">
            <span className="bg-white/60 backdrop-blur-md text-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-sm border border-primary/10">
              Baru Petik Hari Ini
            </span>
          </motion.div>
          
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Kesegaran yang Bisa <br className="hidden md:block" />
            <span className="text-primary relative inline-block">
              Kamu Rasakan.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-medium"
          >
            Langsung ke Meja Makan.
          </motion.p>
          
          <motion.div variants={item} className="pt-8 flex justify-center">
            <WhatsAppCTA />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
