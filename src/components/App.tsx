import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import NavBar from "./NavBar";

// warn: only global styles
const useAppStyles = createUseStyles({
  "@global": {
    body: {
      backgroundColor: "#101122",
      fontFamily: "monospace",
      fontSize: "15px",
    },
  },
});

export default function App() {
  useAppStyles();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  async function handleUserLogin(event: React.SyntheticEvent) {
    setLoggedIn(true);
  }

  async function handleUserLogout(event: React.SyntheticEvent) {
    setLoggedIn(false);
  }

  return (
    <NavBar
      loggedIn={loggedIn}
      onLoginClick={handleUserLogin}
      onLogoutClick={handleUserLogout}
    />
  );
}
