import { useId, useRef, useState } from "react";
import { GRADIENT } from "./spotlight";

// Accessible tabs (WAI-ARIA tabs pattern): arrow keys, Home/End, roving tabindex.
export default function Tabs({ tabs, label = "Sections" }) {
  const [index, setIndex] = useState(0);
  const uid = useId();
  const refs = useRef([]);

  const onKeyDown = (event) => {
    const last = tabs.length - 1;
    const rtl = document.documentElement.dir === "rtl";
    const forward = rtl ? "ArrowLeft" : "ArrowRight";
    const back = rtl ? "ArrowRight" : "ArrowLeft";
    let next;
    if (event.key === forward) next = index === last ? 0 : index + 1;
    else if (event.key === back) next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    setIndex(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="glass mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1"
      >
        {tabs.map((tab, i) => {
          const selected = i === index;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={`cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                selected ? "text-black" : "text-(--secondary-text) hover:text-white"
              }`}
              style={selected ? { background: GRADIENT } : undefined}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${uid}-panel-${tab.id}`}
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={i !== index}
          tabIndex={0}
          className="mt-8"
        >
          {i === index && <div className="fade-in-up">{tab.content}</div>}
        </div>
      ))}
    </div>
  );
}
