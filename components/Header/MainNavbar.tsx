'use client';
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const logo = '/assets/Heal-Conscious-Logo-black.png';

const CATEGORIES = ["All categories", "Guides", "Accessories"];

function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [careoxOpen, setCareoxOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);


  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Guides");
  const [categoryDropOpen, setCategoryDropOpen] = useState(false);
  const [dropFilter, setDropFilter] = useState("");

  const connectRef = useRef<HTMLLIElement>(null);
  const careoxRef = useRef<HTMLLIElement>(null);
  const whoWeAreRef = useRef<HTMLLIElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const categoryDropRef = useRef<HTMLDivElement>(null);

  const location = usePathname();
  const isConnectPage = location === "/connect" || location === "/Connect";

  
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (connectRef.current && !connectRef.current.contains(e.target as Node)) {
        setConnectOpen(false);
        setProfileOpen(false);
      }
      if (careoxRef.current && !careoxRef.current.contains(e.target as Node)) {
        setCareoxOpen(false);
      }
      if (whoWeAreRef.current && !whoWeAreRef.current.contains(e.target as Node)) {
        setWhoWeAreOpen(false);
      }
      if (categoryDropRef.current && !categoryDropRef.current.contains(e.target as Node)) {
        setCategoryDropOpen(false);
        setDropFilter("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setConnectOpen(false);
    setProfileOpen(false);
    setCareoxOpen(false);
    setWhoWeAreOpen(false);
    setOpen(false);
    setSearchOpen(false);
  }, [location]);

  
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setCategoryDropOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
    } else {
      setSearchQuery("");
      setDropFilter("");
      setCategoryDropOpen(false);
    }
  }, [searchOpen]);

  const navLinkClass =
    "flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-[0.3px] text-[#1a1a2e] hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-200 whitespace-nowrap";

  
  const filteredCats = CATEGORIES.filter((c) =>
    c.toLowerCase().includes(dropFilter.toLowerCase())
  );

  const SearchOverlay = () => (
    <div className="fixed top-0 left-0 right-0 z-[3000] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.13)]">
      
      <div className="flex lg:hidden items-stretch h-[72px]">
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") setSearchOpen(false); }}
          placeholder="Enter keywords here..."
          className="flex-1 px-5 text-[15px] text-gray-600 border-none outline-none bg-transparent placeholder-gray-400"
        />
        <button
          onClick={() => setSearchOpen(false)}
          className="bg-[#222] active:bg-[#4a6cf7] text-white flex items-center justify-center transition-colors duration-200"
          style={{ width: 64, flexShrink: 0 }}
          aria-label="Search"
        >
          <IoSearchSharp size={20} />
        </button>
      </div>

    
      <div className="hidden lg:flex items-stretch h-[104px] border-b border-gray-200">

        <div
          className="relative flex items-center border-r border-gray-300 cursor-pointer select-none"
          style={{ minWidth: 200 }}
          ref={categoryDropRef}
        >
          <button
            className="flex items-center gap-2 px-5 h-full w-full text-[15px] text-gray-700 bg-transparent border-none outline-none cursor-pointer"
            onClick={() => { setCategoryDropOpen((v) => !v); setDropFilter(""); }}
          >
            <span className="flex-1 text-left">{selectedCategory}</span>
            <IoIosArrowDown
              className={`text-gray-400 text-sm transition-transform duration-200 ${categoryDropOpen ? "rotate-180" : ""}`}
            />
          </button>

          {categoryDropOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] z-[3001]">
              <input
                autoFocus
                type="text"
                value={dropFilter}
                onChange={(e) => setDropFilter(e.target.value)}
                className="block w-[calc(100%-16px)] mx-2 my-2 px-3 py-2 border border-gray-200 rounded-md text-[13px] outline-none"
              />
              {filteredCats.map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCategoryDropOpen(false);
                    setDropFilter("");
                    searchInputRef.current?.focus();
                  }}
                  className={`px-4 py-[10px] text-[14px] text-gray-700 cursor-pointer transition-colors duration-100 hover:bg-gray-100 ${
                    selectedCategory === cat ? "bg-gray-50 font-semibold" : ""
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

      
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") setSearchOpen(false); }}
          placeholder="Enter keywords here..."
          className="flex-1 px-6 text-[16px] text-gray-600 border-none outline-none bg-transparent placeholder-gray-400"
        />

  
        <button
          onClick={() => setSearchOpen(false)}
          className="bg-[#222] hover:bg-[#4a6cf7] text-white flex items-center justify-center transition-colors duration-200"
          style={{ width: 80, flexShrink: 0 }}
          aria-label="Close search"
        >
          <IoSearchSharp size={22} />
        </button>
      </div>
    </div>
  );

  
  const CareoxItem = () => (
    <li
      className="relative"
      ref={careoxRef}
      onMouseEnter={() => setCareoxOpen(true)}
      onMouseLeave={() => setCareoxOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide text-[#1a1a2e] hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-200 whitespace-nowrap border-none bg-transparent cursor-pointer font-inherit"
        onClick={() => setCareoxOpen((v) => !v)}
      >
        WHAT IS CAREOX?{" "}
        <IoIosArrowDown
          className={`text-sm transition-transform duration-200 ${careoxOpen ? "rotate-180" : ""}`}
        />
      </button>

      {careoxOpen && (
        <ul className="absolute top-[calc(100%+4px)] left-0 mt-0 min-w-[200px] bg-white border border-gray-200 rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] py-[6px] z-[999] list-none animate-dropdown">
          <li>
            <Link href="/careox" onClick={() => { setOpen(false); setCareoxOpen(false); }} className="flex items-center mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
              What is Careox?
            </Link>
          </li>
          <li>
            <Link href="/common-concerns" onClick={() => { setOpen(false); setCareoxOpen(false); }} className="flex items-center mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
              Common Concerns
            </Link>
          </li>
        </ul>
      )}
    </li>
  );

  const WhoWeAreItem = () => (
    <li
      className="relative"
      ref={whoWeAreRef}
      onMouseEnter={() => setWhoWeAreOpen(true)}
      onMouseLeave={() => setWhoWeAreOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide text-[#1a1a2e] hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-200 whitespace-nowrap border-none bg-transparent cursor-pointer font-inherit"
        onClick={() => setWhoWeAreOpen((v) => !v)}
      >
        WHO WE ARE?{" "}
        <IoIosArrowDown
          className={`text-sm transition-transform duration-200 ${whoWeAreOpen ? "rotate-180" : ""}`}
        />
       
      </button>

      {whoWeAreOpen && (
        <ul
          className="absolute top-[calc(100%+4px)] left-0 mt-0 min-w-[180px] bg-white border border-gray-200 rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] py-[6px] z-[999] list-none animate-dropdown"
          onMouseLeave={() => setWhoWeAreOpen(false)}
        >
          <li>
            <Link href="/about" onClick={() => { setOpen(false); setWhoWeAreOpen(false); }} className="flex items-center mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
              WHO WE ARE
            </Link>
          </li>
          <li>
            <Link href="/whereweare" onClick={() => { setOpen(false); setWhoWeAreOpen(false); }} className="flex items-center mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
              Where We Are?
            </Link>
          </li>
        </ul>
      )}
    </li>
  );

  const ConnectItem = () =>
    isConnectPage ? (
      <li className="relative" ref={connectRef}>
        <button
          className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide text-[#1a1a2e] hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-200 whitespace-nowrap border-none bg-transparent cursor-pointer font-inherit"
          onMouseEnter={() => setConnectOpen(true)}
          onClick={() => setConnectOpen((v) => !v)}
        >
          CONNECT{" "}
          <IoIosArrowDown
            className={`text-sm transition-transform duration-200 ${connectOpen ? "rotate-180" : ""}`}
          />
        </button>

        {connectOpen && (
          <ul
            className="absolute top-[calc(100%+4px)] left-0 mt-0 min-w-[180px] bg-white border border-gray-200 rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] py-[6px] z-[999] list-none animate-dropdown"
            onMouseLeave={() => { setConnectOpen(false); setProfileOpen(false); }}
          >
            <li>
              <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); }} className="flex items-center justify-between mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
                Ask An Expert
              </Link>
            </li>
            <li>
              <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); }} className="flex items-center justify-between mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
                Members
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <span className="flex items-center justify-between mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md cursor-pointer transition-all duration-150">
                Profile{" "}
                <IoIosArrowDown className="text-[13px] rotate-[-90deg] text-gray-400" />
              </span>
              {profileOpen && (
                <ul className="absolute top-0 left-full min-w-[160px] bg-white border border-gray-200 rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] py-[6px] z-[1000] list-none animate-dropdown">
                  <li>
                    <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); setProfileOpen(false); }} className="block mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); setProfileOpen(false); }} className="block mx-1 px-4 py-[10px] text-[13.5px] font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-150">
                      Edit Profile
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>
    ) : (
      <li>
        <Link href="/connect" onClick={() => setOpen(false)} className={navLinkClass}>
          CONNECT
        </Link>
      </li>
    );

  const navItems = (
    <>
      <li><Link href="/home" onClick={() => setOpen(false)} className={navLinkClass}>HOME</Link></li>
      <CareoxItem />
      <ConnectItem />
      <li><Link href="/store" onClick={() => setOpen(false)} className={navLinkClass}>STORE</Link></li>
      <WhoWeAreItem />
    </>
  );

  const connectPageItems = (
    <>
      <li><Link href="/home" onClick={() => setOpen(false)} className={navLinkClass}>HOME</Link></li>
      <ConnectItem />
      <li><Link href="/store" onClick={() => setOpen(false)} className={navLinkClass}>STORE</Link></li>
      <WhoWeAreItem />
      <CareoxItem />
    </>
  );

  return (
    <>
      <style>{`
        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-dropdown {
          animation: dropdownFade 0.15s ease;
        }
      `}</style>

      
      {searchOpen && <SearchOverlay />}

      <nav className="w-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] sticky top-0 z-[1000]">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[104px]">

          <Link href="/home">
            <img src={logo} alt="logo" className="h-11 w-auto object-contain" />
          </Link>

    
          <div className="lg:hidden flex items-center gap-4">
    
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-[#1a1a2e] hover:text-[#4a6cf7] transition-colors"
            >
              <IoSearchSharp size={22} />
            </button>

            <Link href="/cart" aria-label="Cart" className="relative text-[#1a1a2e] hover:text-[#4a6cf7] transition-colors">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full leading-none">
                0
              </span>
            </Link>

            <button
              className="flex items-center justify-center p-1 rounded-md text-[#1a1a2e] hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
            </button>
          </div>

  
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {isConnectPage ? connectPageItems : navItems}

            
            <li>
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="flex items-center gap-1 px-3 py-2 text-[#1a1a2e] hover:bg-[#f0f4ff] hover:text-[#4a6cf7] rounded-md transition-all duration-200"
              >
                <IoSearchSharp size={18} />
              </button>
            </li>
          </ul>
        </div>


        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.1)] px-4 pb-5 pt-3">
            <ul className="flex flex-col gap-0.5 list-none m-0 p-0 w-full">
              {isConnectPage ? connectPageItems : navItems}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default MainNavbar;
