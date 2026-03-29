"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ibu Siti",
    location: "Waluya",
    text: "Mangganya selalu fresh dan manis. Pilihan utama buat cemilan sehat keluarga.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Bapak Budi",
    location: "Karaharja",
    text: "Sayur organiknya benar-benar segar. Kalau pagi beli, sayurnya kayak kerasa baru metik dari ladang.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Tini",
    location: "Perumahan Cikarang Baru",
    text: "Pesan parsel buah mendadak via WA, direspon cepat. Buahnya fresh semua, packing rapi. Mantap!",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Ibu Dewi",
    location: "Cikarang Utara",
    text: "Tiap belanja buah pasti mampir ke sini. Mangga harum manisnya pas banget, anak-anak suka banget.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-foreground mb-4">Kata Pelanggan</h2>
            <p className="text-lg text-foreground/70 max-w-xl">
              Kami bahagia ketika Anda bahagia. Inilah alasan mengapa mereka selalu kembali ke Toko Buah Lili.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-rice-paper p-4 rounded-2xl shadow-sm border border-black/5"
          >
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Star className="text-secondary w-8 h-8 fill-secondary" />
            </div>
            <div>
              <p className="text-xl font-bold">5.0 / 5.0</p>
              <p className="text-sm text-foreground/60 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Google Maps
              </p>
            </div>
          </motion.div>
        </div>

        {/* CSS horizontal scroll */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory pt-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((testimoni, idx) => (
            <motion.div
              key={testimoni.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] bg-rice-paper rounded-[2rem] p-8 snap-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-black/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimoni.avatar}
                    alt={testimoni.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">{testimoni.name}</h4>
                  <p className="text-sm text-foreground/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {testimoni.location}
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed italic">
                "{testimoni.text}"
              </p>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
