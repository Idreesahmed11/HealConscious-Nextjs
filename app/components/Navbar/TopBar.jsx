'use client';

import { FaPhoneAlt, FaQuestion, FaMapMarkerAlt } from "react-icons/fa";

function TopBar() {
  return (
    // hidden on mobile (below md), flex on md and above
    <div className="hidden md:flex w-full bg-[#2c2c2c] text-white text-[15px] font-medium px-6 py-2 justify-between items-center">
      
      {/* Left Side */}
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

      {/* Right Side */}
      <div className="flex items-center gap-10">
        <span className="flex items-center gap-2 cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap">
          <FaMapMarkerAlt />
          Store location
        </span>
        <span className="cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap">
          👤 Sign in or Register
        </span>
        <span className="cursor-pointer hover:text-[#00aaff] transition-colors whitespace-nowrap">
          🛒 0 item(s) - $0.00
        </span>
      </div>

    </div>
  );
}

export default TopBar;
