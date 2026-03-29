"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppCTAProps {
  itemName?: string;
}

export default function WhatsAppCTA({ itemName }: WhatsAppCTAProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if current time is after 22:00
    const checkTime = () => {
      const now = new Date();
      // Use WIB (UTC+7) or local time, we'll try local time as per PRD "Script sederhana untuk mendeteksi waktu lokal"
      const hour = now.getHours();
      if (hour >= 22 || hour < 7) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const phoneNumber = "6281234567890"; // Dummy number
  let message = "Halo Toko Buah Lili, saya ingin pesan buah hari ini...";
  if (itemName) {
    message = `Halo Toko Buah Lili, saya ingin tanya stok buah ${itemName} hari ini...`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="flex flex-col items-center">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-colors duration-300 shadow-lg ${
          isOpen ? "bg-[#22C55E] hover:bg-[#166534]" : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        <MessageCircle size={20} />
        {isOpen ? "Chat Sekarang" : "Tinggalkan Pesan"}
      </motion.a>
      {!isOpen && (
        <p className="text-sm mt-2 text-gray-500 font-medium text-center">
          Kami kembali besok pagi jam 07.00
        </p>
      )}
    </div>
  );
}
