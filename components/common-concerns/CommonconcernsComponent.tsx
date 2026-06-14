"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    section: "1. Getting Started",
    questions: [
      {
        q: "How do I know if Careox is right for me?",
        a: "Careox is designed for anyone looking to reduce stress, improve emotional balance, and build long-term resilience. Whether you're managing anxiety, burnout, or just seeking more clarity, Careox offers tools that adapt to your needs.",
      },
      {
        q: "What do I need to do first?",
        a: "Getting started is simple. You'll receive mental healthcare in a box for 4 weeks and psychologist access over Connect app if you have more questions throughout your journey and after it. You can also get a printable program calendar to keep you on track.",
      },
      {
        q: "Do I need prior therapy experience?",
        a: "Not at all. Careox works for beginners and those with past therapy experience. It's easy to follow and is designed to fit naturally into daily life.",
      },
    ],
  },
  {
    section: "2. The Process",
    questions: [
      {
        q: "How does the Careox program work?",
        a: "Careox combines science-backed therapies like Somatic Experiencing, mindfulness, biofeedback, cognitive strategies and more into a structured plan that grows with you.",
      },
      {
        q: "Will I be overwhelmed by too many steps?",
        a: "Not at all, you'll move at your own pace. Careox breaks healing into three simple phases including Awareness, Regulation, and Integration.",
      },
      {
        q: "Do I have support if I get stuck?",
        a: "Yes, you can get guidance directly through the Connect app, where support is available to help you overcome challenges and stay consistent on your journey.",
      },
    ],
  },
  {
    section: "3. The Results",
    questions: [
      {
        q: "How soon will I see results?",
        a: "Everyone's journey is different. Some feel calmer and more focused within weeks, while others notice gradual, long-term change. What matters is that the progress lasts.",
      },
      {
        q: "What kind of improvements can I expect?",
        a: "Common results include reduced stress and anxiety, stronger resilience, improved focus, better emotional balance, and deeper self-awareness.",
      },
      {
        q: "Will these results last after the program?",
        a: "Yes. Careox equips you with lifelong tools to handle stress and maintain emotional well-being so your growth continues well beyond the program.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 py-4 text-left group"
      >
        <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-gray-400 text-xl font-light leading-none group-hover:text-emerald-500 transition-colors duration-200">
          {open ? "−" : "+"}
        </span>
        <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${open ? "text-gray-900" : "text-gray-800"}`}>
          {q}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
        <p className="pl-8 pr-2 text-gray-600 leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
}

export default function CommonConcernsComponent() {
  return (
    <div className="min-h-screen bg-white">

    
      <div className="bg-gray-100">
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 pb-0">
          <nav className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-500 uppercase tracking-widest font-semibold">
            <a href="/" className="hover:text-gray-800 transition-colors">Home</a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-800">Common Concerns</span>
          </nav>
        </div>

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row md:items-center md:gap-8">

    
          <div className="flex-1 py-6 md:py-12 order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.05]">
              COMMON<br />CONCERNS
            </h1>
          </div>

      
          <div className="flex-1 flex justify-center md:justify-end order-2 pb-6 md:pb-0">
            <Image
              src="/assets/Transparent-heal-conscious-image.png"
              alt="Careox App and Program"
              width={520}
              height={420}
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-16">

        
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Common Concerns
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base border-l-4 border-emerald-500 pl-3">
            | How can we help you?
          </p>
        </div>

        
        <div className="space-y-10 md:space-y-14">
          {faqs.map((section) => (
            <div key={section.section}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-6">
                {section.section}
              </h3>
              <div className="border-t border-gray-200">
                {section.questions.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

  
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}
