import React, { useState } from "react";

export default function QueueingStateUpdate() {
  const [number, setNumber] = useState(0);

  function badHandleClick(event) {
    event.preventDefault();

    // React waits until all code in the event handlers has run before processing your state updates.
    // This is why the re-render only happens after all these setNumber() calls.
    // during all of these calls number have same value and stored as a snapshot somewhere inside React
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);

    // This lets you update multiple state variables - even from multiple components - without triggering too many re-renders
    // But this also means that the UI won’t be updated until after your event handler,
    // and any code in it, completes. This behavior, also known as batching,

    // This behavior, also known as batching, makes your React app run much faster.
    // It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated

    // React does not batch across multiple intentional events like clicks - each click is handled separately.
    // Rest assured that React only does batching when it’s generally safe to do.
    // This ensures that, for example, if the first button click disables a form, the second click would not submit it again.
  }

  function goodHandleClick(event) {
    event.preventDefault();

    // It is an uncommon use case, but if you would like to update the same state variable multiple times before the next render,
    // instead of passing the next state value like setNumber(number + 1), you can pass a function that calculates the next state
    // based on the previous one in the queue, like setNumber(n => n + 1).
    // It is a way to tell React to “do something with the state value” instead of just replacing it.

    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);

    // 1. React queues this function to be processed after all the other code in the event handler has run
    // 2. During the next render, React goes through the queue and gives you the final updated state
  }

  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={goodHandleClick}>add 5</button>
    </div>
  );
}

export function Counter() {
  const [number, setNumber] = useState(0);

  // эти 2 вызова работают одинаково
  // setNumber(42);
  // setNumber((prevNumber) => 42);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        Increase the number +6
      </button>
    </>
  );
}

export function HardCounter() {
  const [number, setNumber] = useState(0);

  // Here’s how React works through these lines of code while executing this event handler:
  // setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its queue
  // setNumber(n => n + 1): n => n + 1 is an updater function. React adds that function to its queue
  // setNumber(42): React adds “replace with 42” to its queue.
  // Then React stores 42 as the final result and returns it from useState.

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Increase the number
      </button>
    </>
  );
}

function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let elem of queue) {
    if (isFunc(elem)) {
      finalState = elem(finalState);
    } else {
      finalState = elem;
    }
  }

  return finalState;
}

function isFunc(variable) {
  return typeof variable === "function";
}
