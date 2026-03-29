import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toko Buah Segar Lili - Cikarang Utara & Waluya",
  description: "Kesegaran yang Bisa Kamu Rasakan. Langsung ke Meja Makan. Toko buah segar, parsel buah, dan sayuran organik di area Cikarang Utara dan Waluya. Pesan sekarang melalui WhatsApp.",
  keywords: "Toko buah Cikarang Utara, Buah segar Waluya, Parsel buah Cikarang, Toko sayur organik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} font-sans antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
