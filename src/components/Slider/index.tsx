import { useState } from "react";
import Label from "./Label";
import "./index.css";

export default function Slider() {
  const [inputValue, setInputValue] = useState(0);

  const handleProgress = (value: number) => {
    const slider = document.querySelector<HTMLInputElement>(".slider__input");
    if (!slider) return;
    slider.style.background = `
      linear-gradient(
        to right,
        var(--highlight-color) 0%,
        var(--highlight-color) ${value}%,
        var(--bg-gray-main) ${value}%,
        var(--bg-gray-main) 100%
      )
    `;
  };

  return (
    <article className="container">
      <div className="slider-wrap">
        <div className="slider__value">
          <span className="value">{inputValue}</span>
          <span>%</span>
        </div>
        <div>
          <div className="slider__input-wrap">
            <input
              type="range"
              min="0"
              max="100"
              className="slider__input"
              value={inputValue}
              onChange={(event) => {
                const { value } = event.target;
                setInputValue(Number(value));
                handleProgress(Number(value));
              }}
            />
          </div>
          <Label
            step={25}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleProgress={handleProgress}
          />
        </div>
      </div>
    </article>
  );
}
