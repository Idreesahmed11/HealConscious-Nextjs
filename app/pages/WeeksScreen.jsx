'use client';
import { useState } from "react";

const week1Img = '/assets/week1-300x292.png';;
const week2Img = '/assets/week2-300x296.png';;
const week3Img = '/assets/week3-296x300.png';;
const week4Img = '/assets/week4-300x298.png';;

export default function WeeksScreen({ weeks, onWeekClick, onBack }) {
  const [hoveredId, setHoveredId] = useState(null);

  const weekImages = {
    1: week1Img,
    2: week2Img,
    3: week3Img,
    4: week4Img,
  };

  return (
    <div className="flex flex-col min-h-screen px-1 py-6">
      
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 w-fit transition-colors px-2"
      >
        <span>←</span> Back
      </button>

      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-1">Your 4-Week Journey</h2>
        <p className="text-white/50 text-sm">Choose a week to explore your daily cards</p>
      </div>

  
      <div className="grid grid-cols-2 gap-2 w-full flex-1">
        {weeks.map((week, idx) => (
          <div
            key={week.id}
            onClick={() => onWeekClick(week)}
            onMouseEnter={() => setHoveredId(week.id)}
            onMouseLeave={() => setHoveredId(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onWeekClick(week)}
            aria-label={`Open ${week.name}`}
            className="relative rounded-2xl overflow-hidden cursor-pointer w-full shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            style={{
              minHeight: "260px",
              aspectRatio: "4/5",
              animationDelay: `${idx * 80}ms`,
            }}
          >
            
            <img
              src={weekImages[week.id]}
              alt={`Week ${week.id}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />

      
            <span className="absolute top-3 left-3 text-6xl font-black text-white/10 leading-none z-10 select-none">
              0{week.id}
            </span>

      
            <div
              className="absolute top-4 right-4 text-xl z-10 transition-transform duration-200 hover:translate-x-1"
              style={{ color: week.color }}
            >
              →
            </div>

          
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1 font-semibold">
                Week {week.id}
              </div>
              <div
                className="text-lg font-bold mb-1 drop-shadow-lg"
                style={{ color: week.color, filter: "brightness(0.82)" }}
              >
                {week.name}
              </div>
              <div className="text-[11px] text-white/35">7 daily cards</div>
            </div>

        
            <div
              className="absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none z-20"
              style={{
                borderColor: hoveredId === week.id ? week.color : "transparent",
              }}
            />
          </div>
        ))}
      </div>

  
      <p className="text-center text-white/30 text-xs mt-6">
        
      </p>
    </div>
  );
}
