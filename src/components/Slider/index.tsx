import { useState } from "react";
import "./index.css";

export default function Slider() {
  const [inputValue, setInputValue] = useState("0");

  const handleProgress = (value: string) => {
    const slider = document.querySelector<HTMLInputElement>(".slider");
    if (!slider) return;
    slider.style.background = `linear-gradient(to right, var(--highlight-color) 0%, var(--highlight-color) ${value}%, var(--gray-3) ${value}%, var(--gray-3) 100%)`;
  };

  return (
    <article className="container">
      <div className="slider-wrap">
        <div className="slider__value">
          <span className="value">{inputValue}</span>
          <span>%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          value={inputValue}
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
            handleProgress(value);
          }}
        />
      </div>
    </article>
  );
}
