import { useState } from "react";
import "./index.css";

export default function Toggle() {
  const [defaultActivation, setDefaultActivation] = useState(true);

  const moveHighlight = () => {
    const highlight = document.querySelector(".toggle__highlight");
    const parent = highlight?.parentElement;

    if (!highlight || !parent) return;

    highlight.animate(
      [
        {
          transform: `translateX(${
            defaultActivation ? parent.offsetWidth / 2 - 4 : parent.offsetLeft
          }px)`,
        },
      ],
      {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  };

  return (
    <div className="toggle-container">
      <button
        type="button"
        className="toggle__slider"
        onClick={() => {
          setDefaultActivation((current) => !current);
          moveHighlight();
        }}
      >
        <div
          className={`toggle__option ${
            defaultActivation ? "toggle__option--active" : ""
          }`}
        >
          기본
        </div>
        <div
          className={`toggle__option ${
            !defaultActivation ? "toggle__option--active" : ""
          }`}
        >
          상세
        </div>
        <span className="toggle__highlight" />
      </button>
    </div>
  );
}
