import React from "react";

import Knopka from "./Knopka";

export default function AlertKnopka({ children }) {
  function handleClick(event) {
    console.log(event);
    alert("ya knopka!");
  }

  return <Knopka onClick={handleClick}>{children}</Knopka>;
}
