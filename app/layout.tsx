import Navbar from "@/components/Header/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MobileNav from "@/components/Header/MobileNav";
import Footer from "@/components/Footer";
import { getSiteInfo } from "@/ApiQuery";
import MessengerChatPlugin from "@/components/Chatbot/FacebookChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Picture Squad Studio",
  description:
    "Welcome to Picture Squad Studio, where every click tells a story. Explore our diverse range of photography sessions and packages, and let us help you capture the moments that matter most.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {data} = await getSiteInfo();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer siteInfo={data} />
        <MessengerChatPlugin />
      </body>
    </html>
  );
}
