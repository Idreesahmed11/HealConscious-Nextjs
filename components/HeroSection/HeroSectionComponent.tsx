'use client';

const heroImage = '/assets/Transparent-heal-conscious-image.png';

const HeroSectionComponent = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&family=Barlow:wght@400;700&display=swap');
        
        .hero-section {
          position: relative;
          background: #ebebeb;
          width: 100%;
          overflow: hidden;
        }

        .hero-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 360px;
          padding: 40px 2% 40px 6%;
          box-sizing: border-box;
        }

        .hero-text {
          width: 38%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-label {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.2em;
          color: #0b102c;
          text-transform: uppercase;
          margin-bottom: 6px;
          white-space: nowrap;
        }

        .hero-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(52px, 5.8vw, 60px);
          
          color: #0c1240;
          text-transform: uppercase;
          letter-spacing: 0px;
          margin-bottom: 16px;
          margin-top: 0;
          white-space: nowrap;
        }

        .hero-desc {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 14.5px;
          line-height: 1.65;
          color: #0b102c;
          max-width: 360px;
          margin: 0;
        }

        .hero-image-wrap {
          width: 58%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-wrap img {
          width: 88%;
          max-height: 320px;
          object-fit: contain;
          display: block;
        }

        .hero-dot {
          position: absolute;
          bottom: 14px;
          left: 50%;
          width: 38px;
          height: 3px;
          border-radius: 2px;
          background: #999;
          opacity: 0.55;
        }

        @media (max-width: 640px) {
          .hero-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            min-height: unset;
            padding: 30px 12px 24px 14px;
            gap: 8px;
          }

          .hero-text { width: 55%; }

          .hero-label {
            font-size: 10px;
            letter-spacing: 0.15em;
            white-space: nowrap;
             margin-bottom: 10px;
          }

          .hero-heading {
            font-size: 16px;
            line-height: 0.95;
            margin-bottom: 20px;
            white-space: nowrap;
          }

          .hero-desc {
            font-size: 11px;
            line-height: 1.55;
            max-width: 100%;
            white-space: normal;
          }

          .hero-image-wrap { width: 45%; }

          .hero-image-wrap img {
            width: 100%;
            max-height: 180px;
          }

          .hero-arrow { display: none; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-label">Heal Conscious</p>
            <h1 className="hero-heading">CAREOX – CONNECT</h1>
            <p className="hero-desc">
              A 360 degree 4 week program where experts help you progress to a
              healthy mental health routine.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Careox Connect" />
          </div>
        </div>
        <div className="hero-dot" />
      </section>
    </>
  );
};

export default HeroSectionComponent;