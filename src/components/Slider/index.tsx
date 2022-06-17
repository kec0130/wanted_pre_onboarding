import { useState } from 'react'
import SliderLabel from './Label'
import styles from './Slider.module.scss'

interface SliderProps {
  min: number
  max: number
  step: number
  unit: string
  labels: Array<number>
}

export default function Slider({ min, max, step, unit, labels }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(min)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSliderValue(Number(value))
  }

  return (
    <article className='container'>
      <h3 className='title'>Slider</h3>
      <div className={styles.sliderWrapper}>
        <div className={styles.valueWrapper}>
          <span className={styles.value}>{sliderValue}</span>
          <span className={styles.unit}>{unit}</span>
        </div>
        <div>
          <div className={styles.inputWrapper}>
            <input
              type='range'
              min={min}
              max={max}
              step={step}
              className={styles.input}
              value={sliderValue}
              onChange={handleInputChange}
              style={{
                background: `linear-gradient(
                  to right,
                  #1098ad 0%,
                  #1098ad ${sliderValue}%,
                  #dee2e6 ${sliderValue}%,
                  #dee2e6 100%
                  )`,
              }}
            />
          </div>
          <SliderLabel unit={unit} labels={labels} sliderValue={sliderValue} setSliderValue={setSliderValue} />
        </div>
      </div>
    </article>
  )
}
