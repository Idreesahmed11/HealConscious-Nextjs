"use client";
import { useState } from "react";
import BoxScreen from "./BoxScreen";
import WeeksScreen from "./WeeksScreen";
import CardsScreen from "./CardsScreen";
import CardModal from "./CardModal";
import { weeksData } from "./data";

export default function CareoxExperience({ onClose }) {
  const [screen, setScreen] = useState("box"); 
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleBoxClick() {
    setScreen("weeks");
  }

  function handleWeekClick(week) {
    setSelectedWeek(week);
    setScreen("cards");
  }

  function handleCardClick(day, index) {
    setSelectedCard({ ...day, dayIndex: index, week: selectedWeek });
  }

  function handleBackToWeeks() {
    setScreen("weeks");
    setSelectedWeek(null);
  }

  function handleBackToBox() {
    setScreen("box");
  }

  return (
    <div className="cx-wrapper">
      {screen === "box" && (
        <BoxScreen onBoxClick={handleBoxClick} onClose={onClose} />
      )}
      {screen === "weeks" && (
        <WeeksScreen
          weeks={weeksData}
          onWeekClick={handleWeekClick}
          onBack={handleBackToBox}
        />
      )}
      {screen === "cards" && selectedWeek && (
        <CardsScreen
          week={selectedWeek}
          onCardClick={handleCardClick}
          onBack={handleBackToWeeks}
        />
      )}
      {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Georgia', serif;
        }
        .cx-wrapper {
          min-height: 100vh;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
