import { useState } from 'react'
import Label from './Label'
import styles from './Slider.module.scss'

interface SliderProps {
  labelStep: number
}

export default function Slider({ labelStep }: SliderProps) {
  const [inputValue, setInputValue] = useState(0)

  const handleProgress = (value: number) => {
    const slider = document.querySelector<HTMLInputElement>('.slider__input')
    if (!slider) return

    slider.style.background = `
      linear-gradient(
        to right,
        var(--highlight-color) 0%,
        var(--highlight-color) ${value}%,
        var(--bg-gray-main) ${value}%,
        var(--bg-gray-main) 100%
      )
    `
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInputValue(Number(value))
    handleProgress(Number(value))
  }

  return (
    <article className='container'>
      <h3 className='title'>Slider</h3>
      <div className={styles.sliderWrapper}>
        <div className={styles.valueWrapper}>
          <span className={styles.value}>{inputValue}</span>
          <span>%</span>
        </div>
        <div>
          <div className={styles.inputWrapper}>
            <input
              type='range'
              min='0'
              max='100'
              className={styles.input}
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
  )
}
