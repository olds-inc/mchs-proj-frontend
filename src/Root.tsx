import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { CurrentUser, ErrorMessage } from "./types";

import { FAKE_USER_EMAIL, FAKE_USER_PASS } from "./constants";

import AuthService from "./services/auth";

import { extractErrorPayload } from "./utils";

import { CurrentUserContext } from "./contexts/CurrentUser";
import { ErrorBoundaryContext } from "./contexts/ErrorBoundary";

import AlertWithError from "./components/AlertWithError";
import AppNavbar from "./components/AppNavbar";

export default function Root() {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  // todo: реакт генерит 2 запроса при рендерах, чтобы от этого избавиться нужно подключать модную либу
  // но пока на этой похуй т.к. в стейт кладется результат последнгео запроса
  useEffect(() => {
    if (currentUser === null) {
      new AuthService()
        .loginUser({
          email: FAKE_USER_EMAIL,
          password: FAKE_USER_PASS,
        })
        .then((user) => {
          setCurrentUser({
            email: user.email,
            // todo: хранить такую информацию в стейте нельзя, но на это сейчас вообще поебать
            // по-хорошему токены нужно положит хотя бы в локал сторадж и доставать оттуда в момент реквестов
            tokens: {
              accessToken: user.tokens.accessToken,
              refreshToken: user.tokens.refreshToken,
            },
          });
        })
        .catch((error) => {
          setErrorMessage(extractErrorPayload(error));
        });
    }
  }, [currentUser]);

  return (
    <>
      <AppNavbar />
      <ErrorBoundaryContext.Provider value={errorMessage}>
        <CurrentUserContext.Provider value={currentUser}>
          {errorMessage ? (
            <Container>
              <AlertWithError
                message={errorMessage.message}
                details={errorMessage.details}
              />
            </Container>
          ) : (
            <Outlet />
          )}
        </CurrentUserContext.Provider>
      </ErrorBoundaryContext.Provider>
    </>
  );
}
