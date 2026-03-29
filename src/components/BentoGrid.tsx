"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppCTA from "./WhatsAppCTA";

const bentoItems = [
  {
    title: "Buah Musiman",
    description: "Mangga harum manis, Semangka segar, dan lainnya. Pilihan terbaik hari ini.",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
    itemName: "Buah Musiman"
  },
  {
    title: "Sayur Organik",
    description: "Bebas pestisida, langsung dari petani lokal.",
    image: "https://images.unsplash.com/photo-1596199050105-6d5d32222916?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    itemName: "Sayur Organik"
  },
  {
    title: "Parsel Kustom",
    description: "Hadiah sehat untuk yang tersayang. Bisa request isian.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    itemName: "Parsel Kustom"
  }
];

export default function BentoGrid() {
  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-foreground mb-4">Koleksi Segar</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ragam pilihan produk berkualitas yang kami siapkan khusus untuk Anda hari ini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow ${item.className}`}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 font-medium mb-4 line-clamp-2">{item.description}</p>
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Toko Buah Lili, saya ingin tanya stok ${item.itemName} hari ini...`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-white font-bold transition-colors"
                  >
                    Tanya Stok &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
