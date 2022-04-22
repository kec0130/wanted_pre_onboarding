import "./Label.css";

interface LabelProps {
  step: number;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  handleProgress: (value: string) => void;
}

export default function Label({
  step,
  setInputValue,
  handleProgress,
}: LabelProps) {
  const labelList = Array(100 / step + 1)
    .fill(0)
    .map((_, i) => i * step);

  return (
    <div className="label-wrap">
      {labelList.map((label) => (
        <button
          key={label}
          type="button"
          className="label"
          onClick={() => {
            setInputValue(label.toString());
            handleProgress(label.toString());
          }}
        >
          {label}%
        </button>
      ))}
    </div>
  );
}
