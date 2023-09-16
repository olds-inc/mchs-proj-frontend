import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

createRoot(document.getElementById("root")).render(
  React.createElement(StrictMode, { children: React.createElement(App) })
);
