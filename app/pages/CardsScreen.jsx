'use client';


export default function CardsScreen({ week, imageMap = {}, onCardClick, onBack }) {
  return (
    <div className="cx-screen" style={{ "--week-color": week.color, "--week-accent": week.accent }}>
      {/* Header */}
      <div className="cx-header">
        <button className="cx-back-btn" onClick={onBack}>← Back</button>
        <h2 className="cx-week-title">
          {week.icon} Week {week.id} — {week.name}
        </h2>
      </div>

    
      <div className="cx-cards-grid">
        {week.days.map((day, index) => {
          const imgSrc = imageMap[day.image] || null;

          return (
            <div
              key={index}
              className="cx-card"
              onClick={() => onCardClick(day, index)}
              style={{ animationDelay: `${index * 60}ms` }}
            >
        
              <div className="cx-card-img-wrap">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={`Day ${index + 1}`}
                    className="cx-card-img"
                  />
                ) : (
                  <div className="cx-card-img-placeholder">
                    <span>{week.icon}</span>
                  </div>
                )}
                <div className="cx-card-day-badge">Day {index + 1}</div>
              </div>

    
              <div className="cx-card-body">
                <h3 className="cx-card-title">{day.title}</h3>
                <p className="cx-card-theme">{day.theme}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

