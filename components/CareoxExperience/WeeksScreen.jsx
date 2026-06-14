"use client";
import Image from "next/image";

export default function WeeksScreen({ weeks, onWeekClick, onBack }) {
  return (
    <div className="min-h-screen bg-[#faf7f4] flex flex-col">


      <div className="sticky top-0 z-10 bg-white border-b border-black/[0.07] flex items-center justify-between px-5 sm:px-8 py-4">
          <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-white bg-[#2c2118] hover:bg-[#c9a97a] transition-all duration-200 border-none cursor-pointer rounded-full px-4 py-2"
        >
          Back
        </button>
        <span className="text-sm font-bold text-[#2c2118] tracking-[0.1em] uppercase" />
        <div className="w-20" />
      </div>

  
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-12 pb-16 flex flex-col items-center text-center">

        <p className="text-[11px] tracking-[0.2em] uppercase text-[#c9a97a] mb-2" />

        <h1
          className="text-[#2c2118] tracking-tight mb-2 w-full text-center"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
        >
          Your 4 - Week Journey
        </h1>

        <p className="text-[#7a6a5a] text-[15px] mb-14 text-center">
          Choose a week to explore your daily cards
        </p>

    
       <div className="w-full max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {weeks.map((week, i) => (
            <div
              key={week.id}
              onClick={() => onWeekClick(week)}
              className="w-full cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200"
              style={{
                background: week.color,
                animationDelay: `${i * 80}ms`,
                animation: 'fadeUp 0.5s ease both',
              }}
            >
        
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{ background: week.color }}
              >
                <Image
                  src={week.cover}
                  alt={`Week ${week.id}`}
                  fill
                  className="object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
        
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
              
                <div className="absolute top-2.5 left-3 bg-white/85 text-[#2c2118] text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full">
                  Week {week.id}
                </div>
              </div>

        
              <div className="flex flex-col items-center gap-1 px-3 py-4">
                <span className="text-2xl">{week.icon}</span>
                <h3 className="text-[#2c2118] font-bold text-base leading-snug text-center">
                  {week.name}
                </h3>
                <p className="text-[#7a6a5a] text-xs tracking-wide">
                  7 days
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}