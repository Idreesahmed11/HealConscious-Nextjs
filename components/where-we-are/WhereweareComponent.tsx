"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WhereweareComponent() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

  
      <div className="w-full bg-[#f3f4f6] px-10 py-9 flex items-center justify-between overflow-hidden min-h-[200px] relative">
  
        <div className="flex-1 z-10">
          <nav className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-4">
            <Link href="/home" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-900 font-bold">Where We Are?</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">
            WHERE WE ARE?
          </h1>
        </div>

      
        <div className="hidden md:flex items-end gap-3 z-10 flex-shrink-0">
          <div className="relative w-[220px] h-[180px]">
            <Image
              src="/assets/Transparent-heal-conscious-image.png"
              alt="Where we are"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>

      
      <div className="px-10 pt-12 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 max-w-3xl">

      
          <div className="flex items-start gap-4 py-3">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
                <rect x="4" y="10" width="40" height="28" rx="4" stroke="#374151" strokeWidth="2" fill="none"/>
                <polyline points="4,14 24,28 44,14" stroke="#374151" strokeWidth="2" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-gray-900 uppercase tracking-widest mb-1">Email:</div>
              <a href="mailto:contact@healconscious.com" className="text-[13px] text-gray-500 hover:text-blue-600 transition-colors">
                contact@healconscious.com
              </a>
            </div>
          </div>

    
          <div className="flex items-start gap-4 py-3">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
                <path d="M9 6h9l3.5 9L16 18c2 4 8 10 12 12l3-5.5 9 3.5v9C35 42 4 38 9 6z" stroke="#374151" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                <path d="M31 6c5.5 0 9 3.5 9 9" stroke="#374151" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M31 12c2.5 0 4 1.5 4 4" stroke="#374151" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-gray-900 uppercase tracking-widest mb-1">Phone:</div>
              <a href="tel:+13156549181" className="text-[13px] text-gray-500 hover:text-blue-600 transition-colors">
                + 1 (315) 654-9181 – Whatsapp
              </a>
            </div>
          </div>

          
          <div className="flex items-start gap-4 py-3">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
                <path d="M24 4C15 4 7 11 7 19.5C7 31 24 44 24 44C24 44 41 31 41 19.5C41 11 33 4 24 4Z" stroke="#374151" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="19" r="5.5" stroke="#374151" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-gray-900 uppercase tracking-widest mb-1">Address:</div>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                111B S Gov Avenue, STE 7126 19904 Dover, DE
              </p>
            </div>
          </div>

        </div>
      </div>

      
      <div className="px-10 pt-12 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Leave your message</h2>
          <p className="text-sm text-gray-500">Send us a message</p>
        </div>

        <div className="max-w-[520px] mx-auto">
          {submitted ? (
            <div className="text-center p-12 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="w-[52px] h-[52px] rounded-full bg-green-100 border border-green-300 flex items-center justify-center mx-auto mb-4">
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-sm text-gray-500 mb-6">We&apos;ll get back to you as soon as possible.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", message: "" }); }}
                className="text-blue-600 text-sm hover:underline bg-transparent border-none cursor-pointer"
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border-[1.5px] border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                    <div className="text-[11px] text-gray-400 mt-1">First</div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border-[1.5px] border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                    <div className="text-[11px] text-gray-400 mt-1">Last</div>
                  </div>
                </div>
              </div>

              
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border-[1.5px] border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

            
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                  Comment or Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={7}
                  className="w-full border-[1.5px] border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-vertical"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest px-7 py-3 rounded-md transition-colors cursor-pointer"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-50 w-10 h-10 bg-gray-700 hover:bg-gray-900 rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer"
      >
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2.5} strokeLinecap="round">
          <path d="M5 15l7-7 7 7"/>
        </svg>
      </button>

    </div>
  );
}
