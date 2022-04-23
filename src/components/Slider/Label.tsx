import "./Label.css";

interface LabelProps {
  step: number;
  inputValue: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
  // eslint-disable-next-line no-unused-vars
  handleProgress: (value: number) => void;
}

export default function Label({
  step,
  inputValue,
  setInputValue,
  handleProgress,
}: LabelProps) {
  const labelCount = 100 / step + 1;
  const labelList = Array(labelCount)
    .fill(0)
    .map((_, i) => i * step);

  return (
    <div className="label-wrap">
      <div className="label-circle-wrap">
        {labelList.map((label) => (
          <span
            className={`label-circle ${
              label <= inputValue ? "label-circle--active" : ""
            }`}
          />
        ))}
      </div>
      <div className="label-button-wrap">
        {labelList.map((label) => (
          <button
            key={label}
            type="button"
            className="label-button"
            onClick={() => {
              setInputValue(label);
              handleProgress(label);
            }}
          >
            {label}%
          </button>
        ))}
      </div>
    </div>
  );
}
