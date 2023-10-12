import Navbar from "@/components/Header/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MobileNav from "@/components/Header/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Picture Squad Studio",
  description:
    "Welcome to Picture Squad Studio, where every click tells a story. Explore our diverse range of photography sessions and packages, and let us help you capture the moments that matter most.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
