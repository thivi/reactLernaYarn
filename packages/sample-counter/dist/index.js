import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return React.createElement("div", null, React.createElement("h1", null, count), React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "Increment"));
};