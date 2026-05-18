'use client';
import { Outlet } from "import Link from 'next/link';";
import TopBar from "../components/Navbar/TopBar";
import MainNavbar from "../components/Navbar/MainNavbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />

      <div className="hidden md:block">
        <TopBar />
      </div>

      <MainNavbar />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer
        companyName="Careox"
        bgColor="#1a1a2e"
        textColor="#ffffff"
        showCopyright={true}
        links={[
          { label: "Home",            href: "/" },
          { label: "Store",           href: "/store" },
          { label: "About",           href: "/About" },
          { label: "Connect",         href: "/Connect" },
          { label: "Terms",           href: "/terms" },
          { label: "Privacy Policy",  href: "/privacy-policy" },
          { label: "Refund Policy",   href: "/refund-policy" },
          { label: "Shipping Policy", href: "/shipping-policy" },
        ]}
      />
    </div>
  );
};

export default MainLayout;
