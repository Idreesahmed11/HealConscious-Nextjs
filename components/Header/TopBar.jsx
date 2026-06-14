'use client';

import { useState, useRef } from "react";
import { FaPhoneAlt, FaQuestion, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

function TopBar() {
  const [cartOpen, setCartOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCartOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setCartOpen(false);
    }, 150);
  };

  return (
    
    <div className="hidden md:flex w-full bg-[#2c2c2c] text-white text-[15px] font-medium px-6 py-2 justify-between items-center relative z-50">

  
      <div className="flex items-center gap-10">
        <span className="flex items-center gap-2 cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap">
          <FaPhoneAlt />
          Whatsapp + 1 (012) 345-6789
        </span>
        <span className="flex items-center gap-2 cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap">
          <FaQuestion />
          Need help
        </span>
      </div>

    
      <div className="flex items-center gap-10">
        <span className="flex items-center gap-2 cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap">
          <FaMapMarkerAlt />
          Store location
        </span>
        <span className="cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap">
          👤 Sign in or Register
        </span>

      
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href="/cart"
            className="flex items-center gap-2 cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap"
          >
            <FaShoppingCart />
            0 item(s) - $0.00
          </Link>

          {cartOpen && (
            <div
            >
         
            
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
