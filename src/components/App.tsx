import React, { useState, useEffect } from "react";
import axios from "axios";
import { createUseStyles } from "react-jss";

export default function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // todo: это нельзя хранить в стейте
  // нужно переносить в сторадж и доставать оттуда только при реквестах
  const [tokens, setTokens] = useState<{
    accessToken: string;
    refreshToken: string;
  }>({ accessToken: "", refreshToken: "" });

  async function handleUserSuccessLogin(
    accessToken: string,
    refreshToken: string
  ) {
    setLoggedIn(true);
    setTokens({
      ...tokens,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  }

  // todo: реакт генерит 2 запроса при рендерах, чтобы от этого избавиться нужно подключать модную либу
  // но пока на этой похуй т.к. в стейт кладется результат последнгео запроса
  useEffect(() => {
    if (!loggedIn) {
      axios
        .post("http://127.0.0.1:8000/auth/users/tokens", {
          email: "pasha@tehnik.com",
          password: "K@nteynir_1",
        })
        .then((response) => {
          setLoggedIn(true);
          setTokens({
            ...tokens,
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
          });
        });
    }
  }, [loggedIn]);

  const useStyles = createUseStyles({
    "@global": {
      body: {
        backgroundColor: "lavender",
        fontFamily: "monospace",
      },
    },
    app: {
      color: "grey",
    },
  });
  const classes = useStyles();

  return (
    <div className="app">
      <h1>MCHS Project Frontend</h1>
      {!loggedIn && (
        <div>
          <h2>Loading ...</h2>
        </div>
      )}
      {loggedIn && (
        <div>
          <h2 className={classes.app}>Privetik</h2>
        </div>
      )}
    </div>
  );
}
