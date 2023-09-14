import React from "react";

import "./App.scss";
import LoginForm from "../LoginForm/LoginForm";

export default function App() {
  return (
    <div className="app">
      <h1>MCHS Project Frontend</h1>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
