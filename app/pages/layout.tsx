import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../globals.css";
import TopBar from "../components/Navbar/TopBar";
import MainNavbar from "../components/Navbar/MainNavbar";
import Footer from "../footer/page";
import ScrollToTop from "./ScrollToTop";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  description: "An alternate medicine...",
  icons: {
    icon: [
      {
        url: "/assets/HC_Logo_transp-1-e1722462615827.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <ScrollToTop />
        <div className="hidden md:block"><TopBar /></div>
        <MainNavbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}