import { useMemo, useState } from 'react'
import classNames from 'classnames'
import styles from './Tab.module.scss'

interface TabProps {
  tabs: Array<string>
}

export default function Tab({ tabs }: TabProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabWidth = useMemo(() => 100 / tabs.length, [tabs])

  return (
    <article className='container'>
      <h3 className='title'>Tab</h3>
      <div className={styles.tabWrapper}>
        <div>
          {tabs.map((tab, index) => {
            const key = `tab-${index}-${tab}`
            return (
              <button
                key={key}
                type='button'
                className={classNames(styles.tab, { [styles.active]: currentIndex === index })}
                onClick={() => setCurrentIndex(index)}
                style={{ width: `${tabWidth}%` }}
              >
                {tab}
              </button>
            )
          })}
        </div>
        <span
          className={styles.indicator}
          style={{
            width: `${tabWidth}%`,
            transform: `translateX(${currentIndex * 100}%)`,
          }}
        />
      </div>
    </article>
  )
}
