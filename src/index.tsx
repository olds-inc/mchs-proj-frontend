import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import {
  AccountPage,
  HomePage,
  ReactionPage,
  SettingsPage,
  StatisticsPage,
  MapPage,
  DutyPage,
  VehiclesPage,
  DocumentsPage,
  PlanningPage,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route element={<HomePage />} path="/" />
      <Route element={<ReactionPage />} path="/reaction" />
      <Route element={<StatisticsPage />} path="/statistics" />
      <Route element={<DutyPage />} path="/duty" />
      <Route element={<VehiclesPage />} path="/vehicles" />
      <Route element={<DocumentsPage />} path="/documents" />
      <Route element={<PlanningPage />} path="/planning" />
      <Route element={<MapPage />} path="/map" />
      <Route element={<AccountPage />} path="/account" />
      <Route element={<SettingsPage />} path="/settings" />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<h1>Loading ...</h1>} />
  </StrictMode>
);
