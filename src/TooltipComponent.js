import React, { useState } from "react";
import "./Tooltip.css";

const TooltipComponent = (name, link) => {
  return (
    <div className="tooltip-styles">
      <h2>{name}</h2>
      <input
        type="button"
        value="Download"
        onClick={navigate("www.google.com")}
      />
    </div>
  );
};

const renderTooltip = (nodeData) => {
  return (
    <div>
      <p>{nodeData.name}</p>
      {nodeData.attributes && (
        <ul>
          {Object.entries(nodeData.attributes).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          <text>{props.content}</text>
        </div>
      )}
    </div>
  );
};

export default Tooltip;


// export default TooltipComponent;
