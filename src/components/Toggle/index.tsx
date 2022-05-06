import { useState } from 'react'
import classNames from 'classnames'
import styles from './Toggle.module.scss'

interface ToggleProps {
  defaultOption: string
  anotherOption: string
}

export default function Toggle({ defaultOption, anotherOption }: ToggleProps) {
  const [defaultActivation, setDefaultActivation] = useState(true)

  const moveHighlight = () => {
    const highlight = document.querySelector('.toggle__highlight')
    const parent = highlight?.parentElement

    if (!highlight || !parent) return

    highlight.animate(
      [
        {
          transform: `translateX(${defaultActivation ? parent.offsetWidth / 2 - 4 : 0}px)`,
        },
      ],
      {
        duration: 200,
        easing: 'ease-in-out',
        fill: 'forwards',
      }
    )
  }

  return (
    <article className='container'>
      <h3 className='title'>Toggle</h3>
      <div className={styles.toggleWrapper}>
        <button
          type='button'
          className={styles.slider}
          onClick={() => {
            setDefaultActivation((current) => !current)
            moveHighlight()
          }}
        >
          <div className={classNames(styles.option, { [styles.active]: defaultActivation })}>{defaultOption}</div>
          <div className={classNames(styles.option, { [styles.active]: !defaultActivation })}>{anotherOption}</div>
          <span className={styles.indicator} />
        </button>
      </div>
    </article>
  )
}
