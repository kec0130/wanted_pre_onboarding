import { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "./index.css";

interface DropdownProps {
  list: Array<string>;
}

export default function Dropdown({ list }: DropdownProps) {
  const [opened, setOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState(list[0]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState(list);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetDropdown = () => {
    setOpened(false);
    setSearchValue("");
  };

  const focusInput = () => {
    const input = document.querySelector<HTMLInputElement>(".dropdown__search");
    if (!input) return;
    input.focus();
  };

  return (
    <article className="container">
      <div
        className={`dropdown ${opened ? "dropdown--open" : ""}`}
        onBlur={() => {
          resetDropdown();
          setFilteredList(list);
        }}
      >
        <button
          type="button"
          className="dropdown__select"
          onClick={() => {
            setOpened((current) => !current);
            focusInput();
          }}
        >
          {selectedValue}
          <IoMdArrowDropdown
            className="icon dropdown-icon"
            aria-label="arrow down"
          />
        </button>
        <div className="dropdown__content">
          <div className="search-wrap">
            <IoSearch className="icon search-icon" aria-label="search" />
            <input
              type="text"
              className="dropdown__search"
              ref={inputRef}
              onMouseDown={(event) => event.preventDefault()}
              onClick={(event) => {
                focusInput();
                if (event.target !== inputRef.current) return;
                setOpened(true);
              }}
              onChange={(event) => {
                const { value } = event.target;
                setSearchValue(value);
                setFilteredList(
                  list.filter((x) => x.toLowerCase().includes(value))
                );
              }}
              value={searchValue}
            />
          </div>
          <ul className="dropdown__list">
            {filteredList.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    resetDropdown();
                    setSelectedValue(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
