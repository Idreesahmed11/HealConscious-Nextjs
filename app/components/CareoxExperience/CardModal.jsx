"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function CardModal({ card, onClose }) {
  
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="cm-overlay" onClick={onClose}>
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close" onClick={onClose}>✕</button>

        {card.image && (
          <div className="cm-img-wrap">
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={300}
              className="cm-img"
              onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
            />
          </div>
        )}

        <div className="cm-body">
          <p className="cm-meta">
            Week {card.week?.id} · Day {card.dayIndex + 1}
          </p>
          <h2 className="cm-title">{card.title}</h2>
          <p className="cm-theme">{card.theme}</p>
          <p className="cm-text">{card.body}</p>

          {card.tasks?.length > 0 && (
            <div className="cm-tasks">
              <p className="cm-tasks-label">Today's Tasks</p>
              <ul className="cm-task-list">
                {card.tasks.map((task, i) => (
                  <li key={i} className="cm-task-item">
                    <span className="cm-task-dot" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .cm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: cm-fade-in 0.2s ease;
        }
        .cm-modal {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          max-width: 480px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
          animation: cm-slide-up 0.3s ease;
        }
        .cm-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(0,0,0,0.07);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 0.85rem;
          color: #555;
          z-index: 2;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cm-close:hover { background: rgba(0,0,0,0.14); }
        .cm-img-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }
        .cm-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cm-body {
          padding: 1.5rem 1.75rem 2rem;
        }
        .cm-meta {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a97a;
          margin-bottom: 0.5rem;
        }
        .cm-title {
          font-size: 1.6rem;
          color: #2c2118;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
          line-height: 1.2;
        }
        .cm-theme {
          font-size: 0.9rem;
          color: #9a8a7a;
          font-style: italic;
          margin-bottom: 1rem;
          border-left: 3px solid #c9a97a;
          padding-left: 0.75rem;
        }
        .cm-text {
          font-size: 0.95rem;
          color: #4a3a2a;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .cm-tasks {
          background: #faf7f4;
          border-radius: 12px;
          padding: 1rem 1.25rem;
        }
        .cm-tasks-label {
          font-size: 0.75rem;
          font-weight: bold;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c9a97a;
          margin-bottom: 0.75rem;
        }
        .cm-task-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .cm-task-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: #4a3a2a;
          line-height: 1.4;
        }
        .cm-task-dot {
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c9a97a;
          margin-top: 0.4rem;
        }
        @keyframes cm-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cm-slide-up {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 480px) {
          .cm-modal { border-radius: 16px; }
          .cm-img-wrap { border-radius: 16px 16px 0 0; }
          .cm-body { padding: 1.25rem 1.25rem 1.75rem; }
          .cm-title { font-size: 1.35rem; }
        }
      `}</style>
    </div>
  );
}
