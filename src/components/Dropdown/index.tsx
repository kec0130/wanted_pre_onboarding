import { useRef, useState } from "react";
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

  return (
    <article className="container">
      <div
        className={`dropdown ${opened ? "dropdown--open" : ""}`}
        onBlur={() => {
          setOpened(false);
          setSearchValue("");
          setFilteredList(list);
        }}
      >
        <button
          type="button"
          className="dropdown__select"
          onClick={() => setOpened((current) => !current)}
        >
          {selectedValue}
        </button>
        <div className="dropdown__menu">
          <input
            type="text"
            className="dropdown__search"
            ref={inputRef}
            onMouseDown={(event) => event.preventDefault()}
            onClick={(event) => {
              document
                .querySelector<HTMLInputElement>(".dropdown__search")
                ?.focus();

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
          <ul className="dropdown__list">
            {filteredList.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setOpened(false);
                    setSearchValue("");
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
