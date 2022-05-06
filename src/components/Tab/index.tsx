import { useMemo, useState } from 'react'
import './index.css'

interface TabProps {
  tabs: Array<string>
}

export default function Tab({ tabs }: TabProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabWidth = useMemo(() => 100 / tabs.length, [tabs])

  return (
    <article className='container'>
      <h3 className='title'>Tab</h3>
      <div className='tab-wrap'>
        <div className='tabs'>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type='button'
              className={`tab ${currentIndex === index ? 'tab--active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ width: `${tabWidth}%` }}
            >
              {tab}
            </button>
          ))}
        </div>
        <span
          className='tab__highlight'
          style={{
            width: `${tabWidth}%`,
            transform: `translateX(${currentIndex * 100}%)`,
          }}
        />
      </div>
    </article>
  )
}
