import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById("root"));

// call the render method of root elements and all of it children
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
