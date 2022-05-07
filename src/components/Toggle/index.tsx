import { useMemo, useState } from 'react'
import classNames from 'classnames'
import styles from './Toggle.module.scss'

interface ToggleProps {
  options: Array<string>
}

export default function Toggle({ options }: ToggleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const optionWidth = useMemo(() => 100 / options.length, [options])

  return (
    <article className='container'>
      <h3 className='title'>Toggle</h3>
      <div className={styles.toggleWrapper}>
        {options.map((option, index) => (
          <button
            key={`toggle-${option}`}
            type='button'
            className={classNames(styles.option, { [styles.active]: currentIndex === index })}
            onClick={() => setCurrentIndex(index)}
            style={{ width: `${optionWidth}%` }}
          >
            {option}
          </button>
        ))}
        <span
          className={styles.indicator}
          style={{
            width: `${optionWidth}%`,
            transform: `translateX(${currentIndex * 100}%)`,
          }}
        />
      </div>
    </article>
  )
}
