"use client";

import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-rice-paper/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-primary w-6 h-6" />
            <span className="font-bold text-2xl text-primary tracking-tight">Lili.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#produk" className="text-foreground hover:text-accent transition-colors font-medium">Produk</a>
            <a href="#lokasi" className="text-foreground hover:text-accent transition-colors font-medium">Lokasi</a>
            <a href="#testimoni" className="text-foreground hover:text-accent transition-colors font-medium">Testimoni</a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-primary text-white px-5 py-2.5 rounded-full font-semibold transition-colors duration-300 shadow-sm"
            >
              Chat Sekarang
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
