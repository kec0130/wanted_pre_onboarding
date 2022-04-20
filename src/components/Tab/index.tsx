import { useState } from "react";
import "./index.css";

interface TabProps {
  tabs: Array<string>;
}

export default function Tab({ tabs }: TabProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <article className="container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            type="button"
            className={`tab ${currentTab === tab ? "tab--active" : ""}`}
            key={tab}
            onClick={() => setCurrentTab(tab)}
            style={{ width: `${100 / tabs.length}%` }}
          >
            {tab}
          </button>
        ))}
      </div>
    </article>
  );
}
