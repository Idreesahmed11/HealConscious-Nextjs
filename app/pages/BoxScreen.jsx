'use client';



import { useState } from "react";


const week1Cover = '/assets/week1-300x292.png';;
const week2Cover = '/assets/week2-300x296.png';;
const week3Cover = '/assets/week3-296x300.png';;
const week4Cover = '/assets/week4-300x298.png';;

import CardsScreen from "./CardsScreen";

export const WEEKS_DATA = [
  {
    id: 1,
    name: "Foundation",
    label: "Mindfulness",
    color: "#a3e635",
    accent: "#4ade80",
    icon: "",
    cover: week1Cover,
    days: [
      { title: "Zero Limits",       theme: "Begin with a clean slate"  },
      { title: "Body Awareness",    theme: "Listen to your body"        },
      { title: "Present Moment",    theme: "Anchor yourself now"        },
      { title: "Conscious Breath",  theme: "Breathe with intention"     },
      { title: "Emotional Witness", theme: "Observe without judgment"   },
      { title: "Inner Stillness",   theme: "Find your quiet center"     },
      { title: "Gratitude Flow",    theme: "Close the week with thanks" },
    ],
  },
  {
    id: 2,
    name: "Awareness",
    label: "Self-Reflection",
    color: "#818cf8",
    accent: "#a78bfa",
    icon: "",
    cover: week2Cover,
    days: [
      { title: "Mirror Work",       theme: "See yourself clearly"       },
      { title: "Shadow Self",       theme: "Meet your hidden side"      },
      { title: "Core Values",       theme: "What truly matters to you"  },
      { title: "Past Patterns",     theme: "Break old cycles"           },
      { title: "Inner Dialogue",    theme: "Change the conversation"    },
      { title: "Authentic You",     theme: "Strip away the masks"       },
      { title: "Clarity Day",       theme: "See the path ahead"         },
    ],
  },
  {
    id: 3,
    name: "Reshape",
    label: "Reformation",
    color: "#f472b6",
    accent: "#fb7185",
    icon: "",
    cover: week3Cover,
    days: [
      { title: "Break Free",        theme: "Release what holds you"     },
      { title: "New Habits",        theme: "Build one brick at a time"  },
      { title: "Mindset Shift",     theme: "Reframe your reality"       },
      { title: "Boundary Setting",  theme: "Protect your energy"        },
      { title: "Courage Day",       theme: "Do the scary thing"         },
      { title: "Resilience",        theme: "Bend but never break"       },
      { title: "Rebirth",           theme: "Welcome the new you"        },
    ],
  },
  {
    id: 4,
    name: "Growth",
    label: "Cultivation",
    color: "#fbbf24",
    accent: "#f97316",
    icon: "",
    cover: week4Cover,
    days: [
      { title: "Plant Seeds",       theme: "Intention for the future"   },
      { title: "Nourish Mind",      theme: "Feed what you want to grow" },
      { title: "Community",         theme: "We grow together"           },
      { title: "Forgiveness",       theme: "Let it go with love"        },
      { title: "Joy Practice",      theme: "Choose happiness daily"     },
      { title: "Integration",       theme: "Bring it all together"      },
      { title: "Celebration",       theme: "Honor how far you've come"  },
    ],
  },
];


function WeekCard({ week, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-2xl cursor-pointer select-none"
      style={{
        background: "rgba(10,18,28,0.95)",
        border: `1px solid ${hovered ? week.color + "60" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered
          ? `0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px ${week.color}30`
          : "0 4px 16px rgba(0,0,0,0.4)",
        transform: hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "all 0.2s cubic-bezier(0.34,1.2,0.64,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(week)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(week)}
      aria-label={`Open Week ${week.id}: ${week.name}`}
    >
      {/* Top accent bar */}
      <div style={{ height: 3, background: week.color, flexShrink: 0 }} />

      {/* Cover image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={week.cover}
          alt={week.name}
          className="w-full h-full object-cover block transition-all duration-500"
          style={{
            filter: hovered ? "brightness(0.9) saturate(1.1)" : "brightness(0.65) saturate(0.9)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 30%, rgba(5,12,20,0.9) 100%)`,
          }}
        />
        
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: week.color + "25",
            border: `1px solid ${week.color}50`,
            color: week.color,
            backdropFilter: "blur(8px)",
          }}
        >
          <span>{week.icon}</span>
          <span>Week {week.id}</span>
        </div>
        
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold"
          style={{
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
          }}
        >
          7 days
        </div>
      </div>


      <div className="flex flex-col" style={{ padding: "12px 14px 14px", gap: 4 }}>
        <p className="m-0 text-xs font-semibold tracking-widest uppercase" style={{ color: week.color }}>
          {week.label}
        </p>
        <h3 className="m-0 text-white font-bold" style={{ fontSize: 18, lineHeight: 1.2 }}>
          {week.name}
        </h3>
        <p className="m-0 text-xs" style={{ color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
          {week.days[0].theme} · · ·
        </p>

  
        <div
          className="flex items-center justify-between mt-3 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex gap-1">
            {week.days.slice(0, 7).map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: 5, height: 5,
                  background: i === 0 ? week.color : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          <span
            className="text-xs font-semibold flex items-center gap-1 transition-all duration-200"
            style={{
              color: week.color,
              transform: hovered ? "translateX(3px)" : "translateX(0)",
            }}
          >
            Start Week →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BoxScreen({ boxOpened, onBoxClick }) {
  const [hovered, setHovered] = useState(false);
  const [activeWeek, setActiveWeek] = useState(null);

  
  if (activeWeek) {
    return (
      <CardsScreen
        week={activeWeek}
        onCardClick={(card, idx) => {
          // Yahan apna Day detail logic lagao
          console.log("Day clicked:", card, idx);
        }}
        onBack={() => setActiveWeek(null)}
      />
    );
  }

  return (
    <div
      className="cx-screen cx-box-screen w-full min-h-screen"
      style={{
        background: "linear-gradient(160deg, #070f16 0%, #0a1520 60%, #040c14 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      
      <div className="text-center py-8 px-4">
        <h1
          className="m-0 font-black tracking-[0.2em] text-white"
          style={{ fontSize: "clamp(28px, 6vw, 42px)", letterSpacing: "0.2em" }}
        >
          CAREOX
        </h1>
        <p className="m-0 mt-1 text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
          4 Week Mental Health Fortification Program
        </p>
      </div>

    
      <div
        className={`cx-box-scene ${boxOpened ? "cx-box-opening" : ""} ${hovered ? "cx-box-hovered" : ""}`}
        onClick={onBoxClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        aria-label="Open your Careox box"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onBoxClick()}
      >
        <div className="cx-box-shadow" />
        <div className={`cx-box-lid ${boxOpened || hovered ? "cx-lid-open" : ""}`}>
          <span className="cx-lid-label">CAREOX</span>
          <div className="cx-lid-ribbon" />
        </div>
        <div className="cx-box-body">
          <div className="cx-box-inner">
            {(hovered || boxOpened) && (
              <div className="cx-cards-peek">
                {WEEKS_DATA.map((w, i) => (
                  <div
                    key={i}
                    className={`cx-peek-card cx-peek-${i + 1}`}
                    style={{
                      backgroundImage: `url(${w.cover})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    title={w.name}
                  />
                ))}
              </div>
            )}
            {!hovered && !boxOpened && (
              <div className="cx-box-brain">🧠</div>
            )}
          </div>
          <div className="cx-box-brand">
            <span className="cx-box-brand-text">Heal Conscious</span>
          </div>
        </div>
        <div className="cx-particle cx-p1" />
        <div className="cx-particle cx-p2" />
        <div className="cx-particle cx-p3" />
      </div>

      
      <p
        className="text-center text-xs mt-4 tracking-widest uppercase transition-opacity duration-500"
        style={{
          color: "rgba(255,255,255,0.3)",
          opacity: boxOpened ? 0 : 1,
        }}
      >
        Tap the box to begin your journey
      </p>

      
     
      
    </div>
  );
}


