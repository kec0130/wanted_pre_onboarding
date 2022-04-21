import { useState } from "react";
import "./index.css";

export default function Slider() {
  const [value, setValue] = useState("0");

  const handleProgress = (currentValue: string) => {
    const slider = document.querySelector<HTMLInputElement>(".slider");
    if (!slider) return;
    slider.style.background = `linear-gradient(to right, var(--highlight-color) 0%, var(--highlight-color) ${currentValue}%, var(--gray-3) ${currentValue}%, var(--gray-3) 100%)`;
  };

  return (
    <article className="container">
      <div className="slider-wrap">
        <div className="slider__value">
          <span className="value">{value}</span>
          <span>%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            handleProgress(event.target.value);
          }}
        />
      </div>
    </article>
  );
}
