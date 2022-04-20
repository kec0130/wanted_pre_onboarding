import { useState } from "react";
import "./index.css";

interface ToggleProps {
  defaultOption: string;
  anotherOption: string;
}

export default function Toggle({ defaultOption, anotherOption }: ToggleProps) {
  const [defaultActivation, setDefaultActivation] = useState(true);

  const moveHighlight = () => {
    const highlight = document.querySelector(".toggle__highlight");
    const parent = highlight?.parentElement;

    if (!highlight || !parent) return;

    highlight.animate(
      [
        {
          transform: `translateX(${
            defaultActivation ? parent.offsetWidth / 2 - 4 : 0
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
    <article className="container">
      <div className="toggle-wrap">
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
            {defaultOption}
          </div>
          <div
            className={`toggle__option ${
              !defaultActivation ? "toggle__option--active" : ""
            }`}
          >
            {anotherOption}
          </div>
          <span className="toggle__highlight" />
        </button>
      </div>
    </article>
  );
}
