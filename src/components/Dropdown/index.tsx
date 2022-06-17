import { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import classNames from 'classnames'
import styles from './Dropdown.module.scss'

interface DropdownProps {
  category: string
  data: Country[]
}

export default function Dropdown({ category, data }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(`Select ${category}`)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    if (isOpen) {
      setIsOpen(false)
      setSearchValue('')
      setFilteredData(data)
    } else {
      setIsOpen(true)
    }
  }

  const handleItemClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = event.currentTarget
    setSelectedValue(value)
    toggleDropdown()
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearchValue(value)
    setFilteredData(data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
  }

  const handleClickOutside = (event: MouseEvent) => {
    const { current } = dropdownRef
    const { target } = event

    if (!current || !(target instanceof Element)) return

    if (current.contains(target) || target.matches('.dropdown-button')) return

    toggleDropdown()
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <article className='container'>
      <h3 className='title'>Dropdown</h3>
      <div className={classNames(styles.dropdown, { [styles.open]: isOpen })}>
        <button type='button' className={classNames(styles.selectBtn, 'dropdown-button')} onClick={toggleDropdown}>
          {selectedValue}
          <IoMdArrowDropdown className={styles.arrowIcon} aria-label='toggle dropdown' />
        </button>
        {isOpen && (
          <div className={styles.content} ref={dropdownRef}>
            <div className={styles.searchWrapper}>
              <IoSearch className={styles.searchIcon} aria-label='search' />
              <input
                type='text'
                className={styles.searchInput}
                placeholder='Search'
                onChange={handleSearchChange}
                value={searchValue}
              />
            </div>
            <ul className={styles.dropdownList}>
              {filteredData.map((item) => (
                <li key={`dropdown-list-${item.code}`}>
                  <button type='button' value={item.name} onClick={handleItemClick}>
                    {item.name}
                  </button>
                </li>
              ))}
              {!filteredData.length && <span className={styles.noResult}>No result</span>}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}
