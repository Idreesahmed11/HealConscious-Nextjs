"use client";
import Image from "next/image";

export default function WeeksScreen({ weeks, onWeekClick, onBack }) {
  return (
    <div className="ws-page">
      <div className="ws-top-bar">
        <button className="ws-back-btn" onClick={onBack}>← Back</button>
        <span className="ws-brand"></span>
        <div style={{ width: "80px" }} />
      </div>

      <div className="ws-content">
        <p className="ws-label"></p>
        <h1 className="ws-title">Your 4 - Week Journey</h1>
        <p className="ws-subtitle">Choose a week to explore your daily cards</p>

        <div className="ws-grid">
          {weeks.map((week, i) => (
            <div
              key={week.id}
              className="ws-card"
              style={{
                "--week-color": week.color,
                "--week-accent": week.accent,
                animationDelay: `${i * 80}ms`,
              }}
              onClick={() => onWeekClick(week)}
            >
              <div className="ws-card-img-wrap">
                <Image
                  src={week.cover}
                  alt={`Week ${week.id}`}
                  width={300}
                  height={300}
                  className="ws-card-img"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="ws-card-overlay" />
                <div className="ws-card-week-num">Week {week.id}</div>
              </div>
              <div className="ws-card-body">
                <div className="ws-card-icon">{week.icon}</div>
                <h3 className="ws-card-name">{week.name}</h3>
                <p className="ws-card-days">7 days</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ws-page {
          min-height: 100vh;
          background: #faf7f4;
          display: flex;
          flex-direction: column;
        }
        .ws-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .ws-back-btn {
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
        .ws-back-btn:hover { color: #2c2118; }
        .ws-brand {
          font-size: 1rem;
          font-weight: bold;
          color: #2c2118;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .ws-content {
          flex: 1;
          padding: 2.5rem 1.5rem 4rem;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }
        .ws-label {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a97a;
          margin-bottom: 0.5rem;
        }
        .ws-title {
          font-size: clamp(1.75rem, 5vw, 2.75rem);
          color: #2c2118;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        .ws-subtitle {
          color: #7a6a5a;
          font-size: 0.95rem;
          margin-bottom: 2.5rem;
        }
        .ws-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .ws-card {
          cursor: pointer;
          border-radius: 16px;
          overflow: hidden;
          background: var(--week-color);
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: ws-fade-up 0.5s ease both;
        }
        .ws-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.13);
        }
        .ws-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: var(--week-color);
          overflow: hidden;
        }
        .ws-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ws-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%);
        }
        .ws-card-week-num {
          position: absolute;
          top: 10px;
          left: 12px;
          background: rgba(255,255,255,0.85);
          color: #2c2118;
          font-size: 0.7rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border-radius: 20px;
        }
        .ws-card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }
        .ws-card-icon {
          font-size: 1.5rem;
        }
        .ws-card-name {
          font-size: 1.1rem;
          font-weight: bold;
          color: #2c2118;
        }
        .ws-card-days {
          font-size: 0.8rem;
          color: #7a6a5a;
          letter-spacing: 0.05em;
        }
        @keyframes ws-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .ws-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.9rem;
          }
          .ws-content { padding: 1.75rem 1rem 3rem; }
          .ws-top-bar { padding: 1rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}
