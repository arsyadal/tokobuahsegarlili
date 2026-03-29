"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Map, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="lokasi" className="bg-rice-paper pt-24 pb-12 overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Informasi Toko */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Toko Buah Lili.</h2>
              <p className="text-xl text-foreground/70 font-medium">Kesegaran yang Bisa Kamu Rasakan.</p>
            </div>
            
            <div className="space-y-6 bg-white p-8 rounded-[2rem] shadow-sm border border-black/5">
              <div className="flex gap-4">
                <div className="bg-rice-paper p-3 rounded-xl h-fit">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Alamat</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    Jl. Waluya Raya No.1<br />
                    Kec. Cikarang Utara<br />
                    Kab. Bekasi, Jawa Barat
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-rice-paper p-3 rounded-xl h-fit">
                  <Clock className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Jam Operasional</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    Setiap Hari: 07.00 - 22.00 WIB
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-rice-paper p-3 rounded-xl h-fit">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Kontak</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    +62 812 3456 7890 (Tanya Stok & Pemesanan Via WA)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[400px] w-full rounded-[2rem] overflow-hidden shadow-lg border-4 border-white"
          >
              <iframe
              src="https://maps.google.com/maps?q=Waluya,+Cikarang+Utara,+Kabupaten+Bekasi,+Jawa+Barat&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        <div className="border-t border-black/10 pt-8 mt-16 text-center text-foreground/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Toko Buah Lili. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
