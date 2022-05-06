import classNames from 'classnames'
import styles from './Label.module.scss'

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
    <>
      <div className={styles.labelCircles}>
        {labelList.map((label) => (
          <span key={label} className={classNames(styles.labelCircle, { [styles.active]: label <= inputValue })} />
        ))}
      </div>
      <div className={styles.labelButtons}>
        {labelList.map((label) => (
          <button
            key={label}
            type='button'
            className={styles.labelButton}
            onClick={() => {
              setInputValue(label)
              handleProgress(label)
            }}
          >
            {label}%
          </button>
        ))}
      </div>
    </>
  )
}
