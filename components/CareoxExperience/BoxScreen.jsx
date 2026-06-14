"use client";
import { useState } from "react";

export default function BoxScreen({ onBoxClick, onClose }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    setTimeout(() => {
      onBoxClick();
    }, 400);
  }

  return (
    <div className="bs-page">
      <div className="bs-top-bar">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold text-white bg-[#2c2118] hover:bg-[#c9a97a] transition-all duration-200 border-none cursor-pointer rounded-full px-4 py-2"
        >
          Back to Shop
        </button>
        <span className="bs-brand">Careox</span>
      </div>

      <div className="bs-content">
        <p className="bs-label"></p>
        <h1 className="bs-title">The Careox </h1>
        <p className="bs-subtitle">4 WEEKS MENTTAL HEALTH FORTIFICATION PROGRAM</p>

        <div
          className={`bs-box-wrap ${hovered ? "hovered" : ""} ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="bs-box">
            <div className="bs-box-face bs-box-top" />
            <div className="bs-box-face bs-box-front">
              <div className="bs-box-logo" style={{ color: '#000000' }}>HEAL CONSCIOUS</div>
              <div className="bs-box-ribbon" />
            </div>
            <div className="bs-box-face bs-box-right" />
          </div>
          <div className="bs-box-shadow" />
        </div>

        <p className="bs-hint" style={{ color: '#000000' }}>TAP THE BOX TO BEGIN YOUR JOURNEY</p>
      </div>

      <style jsx>{`
        .bs-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #fdf6f0 0%, #f5e6d8 50%, #ede0d4 100%);
          display: flex;
          flex-direction: column;
        }
        .bs-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .bs-brand {
          font-size: 1.1rem;
          font-weight: bold;
          color: #2c2118;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .bs-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem 4rem;
          text-align: center;
        }
        .bs-label {
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a97a;
          margin-bottom: 0.75rem;
        }
        .bs-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          color: #2c2118;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        .bs-subtitle {
          color: #7a6a5a;
          font-size: 1rem;
          margin-bottom: 3rem;
        }
        .bs-box-wrap {
          cursor: pointer;
          position: relative;
          display: inline-block;
          transition: transform 0.3s ease;
          perspective: 800px;
          margin-bottom: 2rem;
        }
        .bs-box-wrap.hovered {
          transform: translateY(-8px) scale(1.03);
        }
        .bs-box-wrap.clicked {
          transform: scale(0.92) translateY(4px);
        }
        .bs-box {
          position: relative;
          width: 280px;
          height: 240px;
          transform-style: preserve-3d;
          transform: rotateX(10deg) rotateY(-20deg);
        }
        .bs-box-face {
          position: absolute;
        }
        .bs-box-front {
          width: 240px;
          height: 210px;
          background: linear-gradient(145deg, #c9a97a, #a07850);
          border-radius: 8px;
          left: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 4px 4px 20px rgba(160, 120, 80, 0.3);
          padding: 12px;
          box-sizing: border-box;
          overflow: hidden;
        }
        .bs-box-top {
          width: 240px;
          height: 40px;
          background: linear-gradient(145deg, #e8c89a, #c9a97a);
          border-radius: 8px 8px 0 0;
          left: 0;
          top: 0;
          transform: rotateX(30deg);
          transform-origin: bottom center;
        }
        .bs-box-right {
          width: 55px;
          height: 210px;
          background: linear-gradient(145deg, #a07850, #7a5a38);
          border-radius: 0 8px 8px 0;
          right: 0;
          bottom: 0;
          transform: rotateY(-30deg);
          transform-origin: left center;
        }
        .bs-box-logo {
          font-size: 1.6rem;
          font-weight: bold;
          font-style: italic;
          letter-spacing: -0.02em;
          line-height: 1.2;
          text-align: center;
          word-break: break-word;
          width: 100%;
          padding: 0 8px;
          box-sizing: border-box;
        }
        .bs-box-ribbon {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 12px;
          background: rgba(255,255,255,0.25);
          border-radius: 0 0 8px 8px;
        }
        .bs-box-shadow {
          width: 240px;
          height: 24px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%);
          margin: 0 auto;
          transform: scaleX(1.1);
        }
        .bs-hint {
          font-size: 0.85rem;
          margin-top: 0.5rem;
          letter-spacing: 0.05em;
          animation: bs-pulse 2s ease-in-out infinite;
        }
        @keyframes bs-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @media (max-width: 480px) {
          .bs-top-bar { padding: 1rem 1.25rem; }
          .bs-box { width: 220px; height: 190px; }
          .bs-box-front { width: 190px; height: 165px; }
          .bs-box-top { width: 190px; height: 34px; }
          .bs-box-right { width: 44px; height: 165px; }
          .bs-box-shadow { width: 190px; }
          .bs-box-logo { font-size: 1.3rem; }
        }
      `}</style>
    </div>
  );
}
