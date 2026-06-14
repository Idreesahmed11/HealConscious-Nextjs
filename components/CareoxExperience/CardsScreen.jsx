"use client";
import { useState, useEffect } from "react";

function DayDetail({ card, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="min-h-screen bg-white" style={{ scrollbarWidth: "none" }}>

    
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/[0.07] px-5 py-3">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold text-white bg-[#2c2118] hover:bg-[#c9a97a] transition-all duration-200 border-none cursor-pointer rounded-full px-4 py-2"
        >
          Back
        </button>
      </div>

      
      {card.image && (
        <div style={{ padding: "20px 20px 0 20px" }}>
          <img
            src={card.image}
            alt={card.title || "Day image"}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "16px",
            }}
            onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
          />
        </div>
      )}

    
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "36px 24px 96px 24px" }}>
        <p style={{
          fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#c9a97a", fontWeight: 700, marginBottom: "12px",
        }}>
          Week {card.week?.id} · Day {card.dayIndex + 1}
        </p>
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#2c2118", lineHeight: 1.2, marginBottom: "14px" }}>
          {card.title}
        </h2>
        <p style={{
          fontSize: "15px", color: "#9a8a7a", fontStyle: "italic",
          borderLeft: "3px solid #c9a97a", paddingLeft: "14px", marginBottom: "28px",
        }}>
          {card.theme}
        </p>
        <p style={{ fontSize: "16px", color: "#4a3a2a", lineHeight: 1.75, marginBottom: "36px" }}>
          {card.body}
        </p>

        {card.tasks?.length > 0 && (
          <div style={{ background: "#faf7f4", borderRadius: "16px", padding: "24px" }}>
            <p style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#c9a97a", marginBottom: "18px",
            }}>
              Today&apos;s Tasks
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {card.tasks.map((task, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <span style={{
                    marginTop: "7px", flexShrink: 0,
                    width: "8px", height: "8px", borderRadius: "50%", background: "#c9a97a",
                  }} />
                  <span style={{ fontSize: "15px", color: "#4a3a2a", lineHeight: 1.5 }}>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CardsScreen({ week, onCardClick, onBack }) {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(day, index) {
    setSelectedCard({ ...day, dayIndex: index, week });
    if (onCardClick) onCardClick(day, index);
  }

  if (selectedCard) {
    return <DayDetail card={selectedCard} onClose={() => setSelectedCard(null)} />;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: `color-mix(in srgb, ${week.color} 40%, #fff 60%)` }}
    >
  
      <div className="sticky top-0 z-10 w-full flex items-center justify-between px-5 sm:px-8 py-3 border-b border-black/[0.07] bg-white/90 backdrop-blur-md">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-white bg-[#2c2118] hover:bg-[#c9a97a] transition-all duration-200 border-none cursor-pointer rounded-full px-4 py-2"
        >
          Back
        </button>
        <span className="text-sm font-bold text-[#2c2118] tracking-wide">
          Week {week.id} — {week.name}
        </span>
        <div className="w-20" />
      </div>


      <div className="flex-1 w-full px-4 sm:px-6 py-8 pb-16" style={{ maxWidth: "1100px" }}>
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: week.accent + "22", color: week.accent }}
          >
            Week {week.id} of 4
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2c2118] tracking-tight leading-tight mb-3">
            {week.name}
          </h1>
          <p className="text-base font-medium text-[#9a8a7a] tracking-wide">7 days &middot; Click a day to explore</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {week.days.map((day, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(day, index)}
              className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              style={{ animation: `fadeUp 0.45s ease ${index * 60}ms both` }}
            >
              
              <div style={{
                position: "relative",
                width: "100%",
                height: "160px",
                overflow: "hidden",
                background: week.color ?? "#c9a97a",
              }}>
                {day.image && (
                  <img
                    src={day.image}
                    alt={`Day ${index + 1}`}
                    style={{
                      position: "absolute",
                      top: 0, left: 0,
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                )}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "40px",
                  background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.7))",
                }} />
                <span style={{
                  position: "absolute", top: "8px", left: "8px",
                  background: "rgba(255,255,255,0.92)",
                  color: "#2c2118",
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "3px 10px", borderRadius: "999px",
                }}>
                  Day {index + 1}
                </span>
              </div>

              
              <div className="px-3 py-3">
                <h4 className="text-sm font-bold text-[#2c2118] leading-snug mb-1">{day.title}</h4>
                <p className="text-xs text-[#9a8a7a] leading-snug">{day.theme}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
