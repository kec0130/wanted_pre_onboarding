import classNames from 'classnames'
import styles from './SliderLabel.module.scss'

interface SliderLabelProps {
  unit: string
  labels: Array<number>
  sliderValue: number
  setSliderValue: React.Dispatch<React.SetStateAction<number>>
}

export default function SliderLabel({ unit, labels, sliderValue, setSliderValue }: SliderLabelProps) {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = event.currentTarget
    setSliderValue(Number(value))
  }

  return (
    <>
      <div className={styles.labelCircles}>
        {labels.map((label) => (
          <span
            key={`slider-label-circle-${label}`}
            className={classNames(styles.labelCircle, { [styles.active]: label <= sliderValue })}
          />
        ))}
      </div>
      <div className={styles.labelButtons}>
        {labels.map((label) => (
          <button
            key={`slider-label-button-${label}`}
            type='button'
            value={label}
            className={styles.labelButton}
            onClick={handleButtonClick}
          >
            {label}
            {unit}
          </button>
        ))}
      </div>
    </>
  )
}
