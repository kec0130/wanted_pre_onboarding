import { useState } from "react";
import Label from "./Label";
import "./index.css";

interface SliderProps {
  labelStep: number;
}

export default function Slider({ labelStep }: SliderProps) {
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(Number(value));
    handleProgress(Number(value));
  };

  return (
    <article className="container">
      <h3 className="title">Slider</h3>
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
              onChange={handleInputChange}
            />
          </div>
          <Label
            labelStep={labelStep}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleProgress={handleProgress}
          />
        </div>
      </div>
    </article>
  );
}
