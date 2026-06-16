import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/Header/MainNavbar";
import TopBar from "@/components/Header/TopBar";
import Footer from "@/components/footer/Footer";
import Scroll from "@/components/Scroll/Scroll";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heal Conscious",
  description: "Heal Conscious",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <MainNavbar />
        {children}
        <Footer />
        <Scroll />
      </body>
    </html>
  );
}