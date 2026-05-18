'use client';


export default function CardModal({ card, imageMap = {}, onClose }) {
  const imgSrc = imageMap[card.image] || null;

  return (
    <div className="cx-modal-overlay" onClick={onClose}>
      <div
        className="cx-modal"
        onClick={(e) => e.stopPropagation()}
      >
      
        <button className="cx-modal-close" onClick={onClose}>✕</button>

        
        {imgSrc && (
          <div className="cx-modal-img-wrap">
            <img src={imgSrc} alt={card.title} className="cx-modal-img" />
          </div>
        )}

    
        <div className="cx-modal-content">
          <p className="cx-modal-day">
            Week {card.week?.id} · Day {card.dayIndex + 1}
          </p>
          <h2 className="cx-modal-title">{card.title}</h2>
          <p className="cx-modal-theme">{card.theme}</p>
          <p className="cx-modal-body">{card.body}</p>

          {card.tasks?.length > 0 && (
            <div className="cx-modal-tasks">
              <p className="cx-modal-tasks-label">Today's Tasks</p>
              <ul>
                {card.tasks.map((task, i) => (
                  <li key={i} className="cx-modal-task-item">
                    <span className="cx-task-dot" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

