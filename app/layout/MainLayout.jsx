'use client';
import MainNavbarComponent from "@/components/Navbar/MainNavbarComponent";
import TopBarComponent from "@/components/Navbar/TopBarComponent";
import Footer from "../components/Footer";
import ScrollComponent from "@/components/Scroll/ScrollComponent";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <div className="hidden md:block">
        <TopBarComponent />
      </div>
      <MainNavbarComponent />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer
        companyName="Careox"
        bgColor="#1a1a2e"
        textColor="#ffffff"
        showCopyright={true}
        links={[
          { label: "Home", href: "/" },
          { label: "Store", href: "/store" },
          { label: "About", href: "/About" },
          { label: "Connect", href: "/Connect" },
          { label: "Terms", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Refund Policy", href: "/refund-policy" },
          { label: "Shipping Policy", href: "/shipping-policy" },
        ]}
      />
    </div>
  );
};

export default MainLayout;