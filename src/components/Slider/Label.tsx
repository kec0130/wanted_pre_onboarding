import './Label.css'

interface LabelProps {
  labelStep: number
  inputValue: number
  setInputValue: React.Dispatch<React.SetStateAction<number>>
  // eslint-disable-next-line no-unused-vars
  handleProgress: (value: number) => void
}

export default function Label({ labelStep, inputValue, setInputValue, handleProgress }: LabelProps) {
  const labelCount = 100 / labelStep + 1
  const labelList = Array(labelCount)
    .fill(0)
    .map((_, i) => i * labelStep)

  return (
    <div className='label-wrap'>
      <div className='label-circle-wrap'>
        {labelList.map((label) => (
          <span key={label} className={`label-circle ${label <= inputValue ? 'label-circle--active' : ''}`} />
        ))}
      </div>
      <div className='label-button-wrap'>
        {labelList.map((label) => (
          <button
            key={label}
            type='button'
            className='label-button'
            onClick={() => {
              setInputValue(label)
              handleProgress(label)
            }}
          >
            {label}%
          </button>
        ))}
      </div>
    </div>
  )
}
