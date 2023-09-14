import React from "react";

export default function Knopka({ children, onClick }) {
  // Event handlers are the best place for side effects.
  // Unlike rendering functions, event handlers don’t need to be pure,
  // so it’s a great place to change something

  function handleClick(event) {
    // stops the event handlers attached to the tags above from firing
    event.stopPropagation();
    // prevents the default browser behavior for the few events that have it
    event.preventDefault();

    // do something usefull
    console.log("handler inside Knopka");
    console.log(event);

    onClick(event);
  }

  return <button onClick={handleClick}>{children}</button>;
}
