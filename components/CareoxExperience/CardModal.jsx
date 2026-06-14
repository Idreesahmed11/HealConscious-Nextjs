"use client";
import { useEffect } from "react";

export default function CardModal({ card, onClose }) {

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full lg:h-auto lg:max-h-[90vh] lg:w-[90vw] lg:max-w-5xl lg:rounded-3xl rounded-t-3xl bg-white overflow-y-auto shadow-2xl flex flex-col lg:flex-row"
        style={{ scrollbarWidth: "none" }}
        onClick={(e) => e.stopPropagation()}
      >

    
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center text-sm transition-all"
        >
          ✕
        </button>

        
        <div
          className="w-full lg:w-1/2 flex-shrink-0 bg-[#e8ddd4] relative overflow-hidden"
          style={{ 
            minHeight: "55vw",
      
            borderRadius: "inherit",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
    
          <style>{`
            @media (min-width: 1024px) {
              .img-wrapper {
                border-radius: var(--tw-rounded, 1.5rem) 0 0 var(--tw-rounded, 1.5rem) !important;
              }
            }
          `}</style>

          {card.image ? (
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover object-center block"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-7xl"></div>
          )}

          
            
        
          <div
            className="absolute bottom-0 left-0 right-0 h-16 lg:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, white)" }}
          />
          <div
            className="absolute top-0 right-0 bottom-0 w-16 hidden lg:block pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, white)" }}
          />
        </div>

  
        <div
          className="flex-1 px-7 pb-10 pt-6 lg:pt-10 lg:px-10 lg:overflow-y-auto flex flex-col justify-center bg-white"
          style={{ scrollbarWidth: "none" }}
        >
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#c9a97a] mb-3">
            Week {card.week?.id} · Day {card.dayIndex + 1}
          </p>

          <h1 className="text-3xl lg:text-4xl font-bold text-[#2c2118] leading-tight tracking-tight mb-3">
            {card.title}
          </h1>

          <p className="text-sm text-[#9a8a7a] italic border-l-[3px] border-[#c9a97a] pl-3 mb-6">
            {card.theme}
          </p>

          <p className="text-base text-[#4a3a2a] leading-relaxed mb-8">
            {card.body}
          </p>

          {card.tasks?.length > 0 && (
            <div className="bg-[#faf7f4] rounded-2xl p-5">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#c9a97a] mb-4">
                Today's Tasks
              </p>
              <ul className="flex flex-col gap-3">
                {card.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4a3a2a] leading-snug">
                    <span className="mt-[5px] shrink-0 w-2 h-2 rounded-full bg-[#c9a97a]" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}