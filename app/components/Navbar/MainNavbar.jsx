'use client';
import React, { useState, useRef, useEffect } from "react";
import "./MainNavbar.css";
const logo = '/assets/Heal-Conscious-Logo-black.png';;
import Link from "next/link"
import { usePathname } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const connectRef = useRef(null);
  const location = usePathname();


  const isConnectPage =
  location.pathname === "/connect" ||
  location.pathname === "/Connect" ||
  location.pathname === "/";
  useEffect(() => {
    function handleClickOutside(e) {
      if (connectRef.current && !connectRef.current.contains(e.target)) {
        setConnectOpen(false);
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setConnectOpen(false);
    setProfileOpen(false);
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="main-navbar">
      <div className="nav-container">
        <div className="logo">
          <Link href="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
        </button>

        <ul className={`nav-menu ${open ? "active" : ""}`}>

        
          <li>
            <Link href="/home" onClick={() => setOpen(false)}>HOME</Link>
          </li>

          
          {isConnectPage ? (
            <li className="nav-dropdown-wrapper" ref={connectRef}>
              <button
                className="nav-dropdown-trigger"
                onMouseEnter={() => setConnectOpen(true)}
                onClick={() => setConnectOpen(!connectOpen)}
              >
                CONNECT{" "}
                <IoIosArrowDown className={`arrow-icon ${connectOpen ? "rotated" : ""}`} />
              </button>

              {connectOpen && (
                <ul
                  className="nav-dropdown-menu"
                  onMouseLeave={() => { setConnectOpen(false); setProfileOpen(false); }}
                >
                  <li className="dropdown-item">
                    <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); }}>
                      Ask An Expert
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); }}>
                      Members
                    </Link>
                  </li>
                  <li
                    className="dropdown-item has-sub"
                    onMouseEnter={() => setProfileOpen(true)}
                    onMouseLeave={() => setProfileOpen(false)}
                  >
                    <span className="sub-trigger">
                      Profile
                      <IoIosArrowDown className="sub-arrow" />
                    </span>
                    {profileOpen && (
                      <ul className="nav-sub-menu">
                        <li>
                          <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); setProfileOpen(false); }}>
                            View Profile
                          </Link>
                        </li>
                        <li>
                          <Link href="/connect" onClick={() => { setOpen(false); setConnectOpen(false); setProfileOpen(false); }}>
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
              <Link href="/connect" onClick={() => setOpen(false)}>CONNECT</Link>
            </li>
          )}

          
          <li>
            <Link href="/store" onClick={() => setOpen(false)}>STORE</Link>
          </li>

        
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              WHO ARE YOU <IoIosArrowDown /> <IoSearchSharp />
            </Link>
          </li>

        
          <li>
            <Link href="/careox" onClick={() => setOpen(false)}>
              WHAT IS CAREOX <IoIosArrowDown />
            </Link>
          </li>

        
          {/* {isConnectPage && (
            // <li>
            //   <Link href="/where-we-are" onClick={() => setOpen(false)}>
            //     WHERE WE ARE?
            //   </Link>
            // </li>
          )} */}

        </ul>
      </div>
    </div>
  );
}

export default MainNavbar;




