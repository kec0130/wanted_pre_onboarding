import { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "./index.css";

interface DropdownProps {
  category: string;
  list: Array<string>;
}

export default function Dropdown({ category, list }: DropdownProps) {
  const [opened, setOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState(`Select ${category}`);
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState(list);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetDropdown = () => {
    setOpened(false);
    setSearchValue("");
  };

  const handleInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const input = document.querySelector<HTMLInputElement>(".dropdown__search");
    if (!input || event.target !== inputRef.current) return;
    input.focus();
    setOpened(true);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setFilteredList(list.filter((x) => x.toLowerCase().includes(value)));
  };

  return (
    <article className="container">
      <h3 className="title">Dropdown</h3>
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
          onClick={() => setOpened((current) => !current)}
        >
          {selectedValue}
          <IoMdArrowDropdown
            className="icon dropdown-icon"
            aria-label="arrow down"
          />
        </button>
        {opened && (
          <div className="dropdown__content">
            <div className="search-wrap">
              <IoSearch className="icon search-icon" aria-label="search" />
              <input
                type="text"
                className="dropdown__search"
                placeholder="Search"
                ref={inputRef}
                onMouseDown={(event) => event.preventDefault()}
                onClick={handleInputClick}
                onChange={handleSearch}
                value={searchValue}
              />
            </div>
            <ul className="dropdown__list">
              {filteredList.length ? (
                filteredList.map((item) => (
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
                ))
              ) : (
                <span className="no-result">No result</span>
              )}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
