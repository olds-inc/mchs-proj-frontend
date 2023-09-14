import React, { useState } from "react";

// https://react.dev/learn/state-a-components-memory
// Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

// The useState Hook provides those two things:
// 1. A state variable to retain the data between renders
// 2. A state setter function to update the variable and trigger React to render the component again

// In React, useState, as well as any other function starting with ”use”, is called a Hook.
// Hooks are special functions that are only available while React is RENDERING. They let you “hook into” different React features.

// Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.
export default function StatefulOchko() {
  // https://react.dev/learn/choosing-the-state-structure
  const [num, setNum] = useState(1);

  const [isVisible, setIsVisible] = useState(true);

  function handleIncreaseNumberClick(event) {
    console.debug("increase number button clicked", event);

    setNum(num + 1);
  }

  function handleToggleClick(event) {
    console.debug("toggle button clicked", event);

    setIsVisible(!isVisible);
  }

  return (
    <div>
      {isVisible && (
        <div>
          <h1>Privetik #{num}</h1>
          <button onClick={handleIncreaseNumberClick}>increase number</button>
        </div>
      )}
      <button onClick={handleToggleClick}>toggle visibility</button>
    </div>
  );
}
