import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import { HomePage, ReactionPage, StatisticsPage } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route element={<HomePage />} path="/" />
      <Route element={<ReactionPage />} path="/reaction" />
      <Route element={<StatisticsPage />} path="/statistics" />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<h1>Loading ...</h1>} />
  </StrictMode>
);
