"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingDown, Clock, MoveRight } from "lucide-react";

export default function USP() {
  const usps = [
    {
      icon: <CheckCircle2 className="w-10 h-10 text-accent" />,
      title: "Pilihan Super",
      description: "Hanya buah dengan tingkat kematangan pas yang kami siapkan.",
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-accent" />,
      title: "Harga Lokal",
      description: "Kompetitif dan bersahabat untuk seluruh area Cikarang.",
    },
    {
      icon: <Clock className="w-10 h-10 text-accent" />,
      title: "Siap Kirim",
      description: "Pesan pagi, antar siang hari yang sama via Kurir Lokal, Grab, atau Gojek.",
    },
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary rounded-full opacity-20 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-6">Kenapa Toko Buah Lili?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Komitmen kami untuk memberikan kualitas terbaik dengan pelayanan tercepat di Cikarang Utara.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6">{usp.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{usp.title}</h3>
              <p className="text-white/70 leading-relaxed font-medium">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
