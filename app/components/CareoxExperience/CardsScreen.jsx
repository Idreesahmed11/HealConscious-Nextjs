"use client";
import Image from "next/image";

export default function CardsScreen({ week, onCardClick, onBack }) {
  return (
    <div
      className="cs-page"
      style={{ "--week-color": week.color, "--week-accent": week.accent }}
    >
      <div className="cs-top-bar">
        <button className="cs-back-btn" onClick={onBack}>← Back</button>
        <span className="cs-title-bar">
          {week.icon} Week {week.id} — {week.name}
        </span>
        <div style={{ width: "80px" }} />
      </div>

      <div className="cs-content">
        <div className="cs-header">
          <p className="cs-label">Week {week.id} of 4</p>
          <h1 className="cs-heading">{week.name}</h1>
          <p className="cs-sub">7 days · Click a day to explore</p>
        </div>

        <div className="cs-grid">
          {week.days.map((day, index) => (
            <div
              key={index}
              className="cs-card"
              onClick={() => onCardClick(day, index)}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="cs-card-img-wrap">
                <Image
                  src={day.image}
                  alt={`Day ${index + 1}`}
                  width={300}
                  height={300}
                  className="cs-card-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.querySelector(".cs-img-fallback").style.display = "flex";
                  }}
                />
                <div className="cs-img-fallback" style={{ display: "none" }}>
                  <span>{week.icon}</span>
                </div>
                <div className="cs-day-badge">Day {index + 1}</div>
              </div>
              <div className="cs-card-body">
                <h3 className="cs-card-title">{day.title}</h3>
                <p className="cs-card-theme">{day.theme}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cs-page {
          min-height: 100vh;
          background: color-mix(in srgb, var(--week-color) 40%, #fff 60%);
          display: flex;
          flex-direction: column;
        }
        .cs-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(8px);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .cs-back-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #7a6a5a;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          transition: color 0.2s;
          width: 80px;
          text-align: left;
        }
        .cs-back-btn:hover { color: #2c2118; }
        .cs-title-bar {
          font-size: 0.95rem;
          font-weight: bold;
          color: #2c2118;
          letter-spacing: 0.05em;
        }
        .cs-content {
          flex: 1;
          padding: 2rem 1.5rem 4rem;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }
        .cs-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .cs-label {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--week-accent);
          margin-bottom: 0.4rem;
        }
        .cs-heading {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          color: #2c2118;
          letter-spacing: -0.02em;
          margin-bottom: 0.3rem;
        }
        .cs-sub {
          color: #7a6a5a;
          font-size: 0.9rem;
        }
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.1rem;
        }
        .cs-card {
          cursor: pointer;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: cs-fade-in 0.45s ease both;
        }
        .cs-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.12);
        }
        .cs-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: var(--week-color);
          overflow: hidden;
        }
        .cs-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cs-img-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          background: var(--week-color);
        }
        .cs-day-badge {
          position: absolute;
          top: 8px;
          left: 10px;
          background: rgba(255,255,255,0.9);
          color: #2c2118;
          font-size: 0.65rem;
          font-weight: bold;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.2rem 0.55rem;
          border-radius: 20px;
        }
        .cs-card-body {
          padding: 0.85rem 0.9rem 1rem;
        }
        .cs-card-title {
          font-size: 0.95rem;
          font-weight: bold;
          color: #2c2118;
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }
        .cs-card-theme {
          font-size: 0.78rem;
          color: #9a8a7a;
          line-height: 1.4;
        }
        @keyframes cs-fade-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .cs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .cs-content { padding: 1.5rem 1rem 3rem; }
          .cs-top-bar { padding: 1rem 1.25rem; }
          .cs-title-bar { font-size: 0.8rem; }
        }
      `}</style>
    </div>
  );
}
