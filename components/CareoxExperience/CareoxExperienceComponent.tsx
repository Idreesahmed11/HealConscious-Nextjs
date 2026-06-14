"use client";
import { useState } from "react";
import BoxScreen from "./BoxScreen";
import WeeksScreen from "./WeeksScreen";
import CardsScreen from "./CardsScreen";
import { weeksData } from "./data";

export default function CareoxExperienceComponent({ onClose = () => { window.history.back(); } }) {
  const [screen, setScreen] = useState("box");
  const [selectedWeek, setSelectedWeek] = useState(null);

  function handleBoxClick() {
    setScreen("weeks");
  }

  function handleWeekClick(week) {
    setSelectedWeek(week);
    setScreen("cards");
  }

  function handleCardClick(day, index) {
    
  }

  function handleBackToWeeks() {
    setScreen("weeks");
    setSelectedWeek(null);
  }

  function handleBackToBox() {
    setScreen("box");
  }

  return (
    <div>
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
    </div>
  );
}
