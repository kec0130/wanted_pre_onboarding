import { CSSProperties, Fragment, useState } from "react";
import "./index.css";

interface TabProps {
  tabs: Array<string>;
}

export default function Tab({ tabs }: TabProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const tabWidth: CSSProperties = { width: `${100 / tabs.length}%` };

  return (
    <article className="container">
      <h3 className="title">Tab</h3>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Fragment key={tab}>
            <button
              type="button"
              className={`tab ${currentTab === tab ? "tab--active" : ""}`}
              onClick={() => setCurrentTab(tab)}
              style={tabWidth}
            >
              {tab}
            </button>
            {currentTab === tab && (
              <span
                className="tab__highlight"
                style={{
                  ...tabWidth,
                  left: `${(100 / tabs.length) * index}%`,
                }}
              />
            )}
          </Fragment>
        ))}
      </div>
    </article>
  );
}
