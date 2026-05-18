'use client';
import { useState, useRef, useEffect } from "react";
const journalImg = '/assets/careox-mental-health-guide-program.png';;



const StarIcon = ({ filled }) => (
  <svg className={`w-4 h-4 ${filled ? "text-gray-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);


const shippingContent = `We ship worldwide. Shipping times vary by location:

• Pakistan: 3–7 business days
• Asia: 7–14 business days
• Rest of the World: 14–25 business days

All orders are processed within 1–2 business days. You will receive a tracking number via email once your order has shipped.

Free shipping on orders over $75.`;

const refundContent = `We want you to be completely satisfied with your purchase.

• Returns accepted within 30 days of delivery
• Item must be unused and in original condition
• Contact us at support@healconscious.com to initiate a return

Refunds are processed within 5–7 business days after we receive the returned item. Exchanges are subject to stock availability.`;


const PolicyModal = ({ title, content, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "85vh" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-6 py-5">
          {content.split("\n").map((line, i) => (
            <p key={i} className={`text-sm text-gray-600 leading-relaxed ${line === "" ? "mb-3" : "mb-1"}`}>
              {line}
            </p>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


const GooglePayModal = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("Idrees Ahmed");
  const [country, setCountry] = useState("Pakistan");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [suburb, setSuburb] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [showCvvTip, setShowCvvTip] = useState(false);
  const [saved, setSaved] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const formatCard = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-sm rounded-lg shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
      
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white sticky top-0 z-10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-600 font-medium">pay.google.com</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        
        <div className="overflow-y-auto flex-1 px-5 py-5">
          <div className="flex items-center gap-3 mb-5">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900 transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h2 className="text-xl font-normal text-gray-900">Add credit or debit card</h2>
          </div>

          <p className="text-sm text-gray-500 mb-5">All fields required</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 border border-gray-300 rounded px-3 py-3 flex items-center gap-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
              <svg className="w-8 h-5 text-gray-400 flex-shrink-0" viewBox="0 0 32 20" fill="none">
                <rect x="1" y="1" width="30" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="5" y="5" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1"/>
                <line x1="10" y1="5" x2="10" y2="15" stroke="currentColor" strokeWidth="1"/>
                <line x1="5" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1"/>
                <line x1="22" y1="7" x2="28" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="22" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="22" y1="13" x2="28" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCard(e.target.value))}
                className="flex-1 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-400"
                inputMode="numeric"
              />
            </div>
            <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-xs font-bold flex-shrink-0 hover:border-gray-500 transition-colors">
              ?
            </button>
          </div>

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              className="flex-1 border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition-all"
              inputMode="numeric"
            />
            <div className="flex items-center gap-2 flex-1">
              <input
                type="text"
                placeholder="Security code"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="flex-1 min-w-0 border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition-all"
                inputMode="numeric"
              />
              <div className="relative flex-shrink-0">
                <button
                  onClick={() => setShowCvvTip(!showCvvTip)}
                  className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-xs font-bold hover:border-gray-500 transition-colors"
                >
                  ?
                </button>
                {showCvvTip && (
                  <div className="absolute right-0 top-9 bg-gray-800 text-white text-xs rounded px-3 py-2 w-44 z-20 shadow-lg">
                    3-digit code on back of card (4 digits for Amex)
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              id="gpay-cardholder"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 pt-5 pb-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 peer transition-all"
              placeholder=" "
            />
            <label htmlFor="gpay-cardholder" className="absolute left-3 top-1.5 text-xs text-gray-500 pointer-events-none">
              Cardholder name
            </label>
          </div>

          <div className="relative mb-4">
            <label className="absolute left-3 top-1.5 text-xs text-gray-500 pointer-events-none z-10">
              Country/region
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 pt-5 pb-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 bg-white appearance-none transition-all"
            >
              {["Pakistan", "United States", "United Kingdom", "India", "Australia", "Canada", "Germany", "France", "UAE"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <input type="text" placeholder="Street address" value={street} onChange={(e) => setStreet(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 mb-4 transition-all" />
          <input type="text" placeholder="Apt, suite, etc. (optional)" value={apt} onChange={(e) => setApt(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 mb-4 transition-all" />
          <input type="text" placeholder="Suburb" value={suburb} onChange={(e) => setSuburb(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 mb-4 transition-all" />
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 mb-4 transition-all" />
          <input type="text" placeholder="Postal code" value={postal} onChange={(e) => setPostal(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 mb-6 transition-all" inputMode="numeric" />

          <button
            onClick={handleSave}
            className={`w-full py-3.5 rounded-full text-sm font-medium transition-all ${saved ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          >
            {saved ? "✓ Card Saved!" : "Save card"}
          </button>
        </div>
      </div>
    </div>
  );
};


const LinkModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [paying, setPaying] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handlePay = () => {
    if (!email) return;
    setPaying(true);
    setTimeout(() => { setPaying(false); onClose(); }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-500 font-medium">checkout.link.com</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-8 py-8 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#00D64F] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
              </svg>
            </div>
            <span className="text-2xl font-semibold text-gray-900">link</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">Fast, secure checkout</h2>
          <p className="text-sm text-gray-500 mb-8 text-center">Pay faster everywhere Link is accepted.</p>

          <div className="w-full border border-gray-200 rounded-xl p-5 mb-5">
            <p className="text-sm font-semibold text-gray-800 mb-3">Log in</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#00D64F] rounded-lg px-4 py-3 text-sm outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#00D64F] focus:ring-opacity-30 transition-all"
            />
          </div>

          <button
            onClick={handlePay}
            disabled={!email}
            className={`w-full py-4 rounded-full text-sm font-semibold transition-all ${
              paying ? "bg-green-500 text-white" : email ? "bg-gray-800 hover:bg-gray-700 text-white cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {paying ? "✓ Processing..." : "Pay $99.00"}
          </button>

          <div className="flex items-center gap-3 mt-8 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">Cookie settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function CareoxProduct() {
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [showGPay, setShowGPay] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [showRefund, setShowRefund] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {showGPay && <GooglePayModal onClose={() => setShowGPay(false)} />}
      {showLink && <LinkModal onClose={() => setShowLink(false)} />}
      {showShipping && <PolicyModal title="Shipping Policy" content={shippingContent} onClose={() => setShowShipping(false)} />}
      {showRefund && <PolicyModal title="Refund & Exchange Policy" content={refundContent} onClose={() => setShowRefund(false)} />}


      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-5 pb-2">
        <nav className="text-xs text-gray-400 flex flex-wrap gap-1 items-center">
          <a href="#" className="hover:text-gray-600 transition-colors">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-gray-600 transition-colors">Guides</a>
          <span>/</span>
          <span className="text-gray-500">Careox | 4 week mental health fortification program</span>
        </nav>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

        
          <div className="w-full lg:w-[46%]">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-stone-50" style={{ aspectRatio: "4/3" }}>
              <img src={journalImg} alt="Careox Mental Health Journal" className="w-full h-full object-cover" />
            </div>
            
          </div>

        
          <div className="w-full lg:flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 mb-3">
              {[1,2,3,4,5].map((s) => <StarIcon key={s} filled />)}
              <span className="text-xs text-gray-400 ml-1">(0 reviews)</span>
            </div>

            <h1 className="text-2xl sm:text-[1.75rem] font-semibold text-gray-900 leading-snug mb-3">
              Careox | 4 week mental health fortification program
            </h1>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-gray-900">$199.00</span>
      
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              Our self-help mental health guide is carefully curated and crafted by revered psychologist in their niche, and personal coaching and healing. The thematic guide is meant to help you through redefining yourself, in the reflection of who you truly are, helping you reach into the subconscious corners of mind.
            </p>

          
            <p className="text-sm text-gray-500 italic mb-1">
              Shipping takes from 3 to 25 days depending on your location
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Read our{" "}
              <button
                onClick={() => setShowShipping(true)}
                className="underline text-gray-700 hover:text-gray-900 transition-colors"
              >
                shipping policy here
              </button>{" "}
              before you make the purchase.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Read our{" "}
              <button
                onClick={() => setShowRefund(true)}
                className="underline text-gray-700 hover:text-gray-900 transition-colors"
              >
                refund and exchange policy here
              </button>{" "}
              before you make the purchase.
            </p>


        
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-11 text-gray-500 hover:bg-gray-100 transition-colors text-lg font-light">−</button>
                <span className="w-10 text-center text-sm font-medium text-gray-800">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="w-9 h-11 text-gray-500 hover:bg-gray-100 transition-colors text-lg font-light">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 h-11 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 ${added ? "bg-green-600" : "bg-gray-900 hover:bg-gray-700"} text-white`}
              >
                {added ? "✓ ADDED TO CART" : "ADD TO CART"}
              </button>
            </div>

            <button className="w-full h-11 rounded-lg border-2 border-gray-900 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors mb-4">
              BUY IT NOW
            </button>

            
            <div className="flex gap-3 mb-5">
              <button
                onClick={() => setShowGPay(true)}
                className="flex-1 h-11 rounded-xl bg-black flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-white text-sm font-semibold">G Pay</span>
              </button>

              <button
                onClick={() => setShowLink(true)}
                className="flex-1 h-11 rounded-xl bg-[#00D64F] flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 transition-all text-white font-semibold text-sm"
              >
                <BoltIcon /> Pay with link
              </button>
            </div>

            <button
              onClick={() => setWishlist(!wishlist)}
              className="flex items-center gap-2 text-sm mb-6 transition-colors"
              style={{ color: wishlist ? "#ef4444" : "#9ca3af" }}
            >
              <span className={wishlist ? "text-red-500" : "text-gray-400"}><HeartIcon filled={wishlist} /></span>
              {wishlist ? "Added to wishlist" : "Add to wishlist"}
            </button>

          
          </div>
        </div>
      </div>

    
      <section className="w-full border-t border-gray-100 mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex border-b border-gray-200">
            {["description", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all border-b-2 -mb-px ${
                  activeTab === tab ? "border-gray-900 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab === "reviews" ? "Reviews (0)" : "Description"}
              </button>
            ))}
          </div>

          <div className="py-10 text-gray-600 leading-relaxed text-[15px]">
            {activeTab === "description" ? (
              <div className="space-y-5 max-w-3xl">
                <p>
            The Careox: Mental Healthcare in a Box’ is a guided self-help program designed by experts to help you rewire thought patterns, release emotional blocks, and rediscover your best self.
                </p>
                <h6>
                  Product Description
                </h6>
                <p>Careox is a 28-day mental healthcare guide designed to help you release buried pain, ease daily stress, and break free from social pressures. Curated by psychologists and expert coaches, it blends reflection, healing practices, and practical exercises. The guide helps you reconnect with your true self, access the subconscious mind, and move forward with clarity and strength.</p>
                <div>
                  <h4 className="font-bold mb-4 text-gray-900 text-base">Key Features:</h4>
                  <ul className="space-y-3">
                    {[
                      ['28-Day Guided Program: Structured daily prompts and reflections for measurable growth and healing over the course of 4 weeks.'],
                      ["Expertly Curated: Crafted by experienced psychologists and coaches specializing in mental health and personal development."],
                      [" Holistic Healing Approach: Supports emotional freedom, mental clarity, and a healthier mindset."],
                      ["Perfect Gift for Loved Ones: Thoughtful and meaningful present for anyone seeking self-discovery and better mental wellness."],
                      [ " Portable & Easy to Use: Designed for daily use at home, in therapy, or as part of your personal growth journey."],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        <span><strong className="text-gray-800">{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl">
                <p className="text-gray-600 mb-8">There are no reviews yet.</p><br />
                <h6>Be the first to review “Careox | 4 week mental health fortification program”</h6>
                <br /><br />
                <div className="border border-gray-200 rounded-xl p-6 md:p-8">
                  <p className="text-base font-semibold text-gray-900 mb-6">Your email address will not be published. Required fields are marked *</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Your name *" className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 transition-colors" />
                      <input type="email" placeholder="Your email *" className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 transition-colors" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((s) => (
                        <button key={s} className="text-gray-300 hover:text-amber-400 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                      <span className="text-xs text-gray-400 ml-2">Click to rate</span>
                    </div>
                    <textarea placeholder="Your review *" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm h-32 outline-none focus:border-gray-400 resize-none transition-colors" />
                    <button className="bg-gray-900 text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-700 transition-colors">
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      
   
    </div>
  );
}

