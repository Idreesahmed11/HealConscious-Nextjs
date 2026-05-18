'use client';

import { FaPhoneAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        
        <div  className="topbar">
  <div style={{display:"flex"}} className="topbar-left">
    <span style={{display:"flex"}}> <FaPhoneAlt/>  Whatsapp + 1 (012) 345-6789</span>
      <span >
  

</span>
    <span style={{display:"flex"}}>  <FaQuestion />Need help</span>
   
  </div>

  <div className="topbar-right">
  
    <span style={{display:"flex"}}><  FaMapMarkerAlt  /> Store location</span>
    <span>👤 Sign in or Register</span>
    <span>🛒 0 item(s) - $0.00</span>
  </div>
</div>

      </div>
    </div>
  );
}

export default TopBar;
