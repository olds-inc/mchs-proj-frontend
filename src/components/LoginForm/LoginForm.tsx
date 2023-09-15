import React, { useState, useRef } from "react";
import axios from "axios";

import "./LoginForm.scss";

// todo: надо сделать финитэ стейт машинэ состояний формы и транзишены между ними

export default function LoginForm() {
  const formRef = useRef(null);
  const [state, setState] = useState({
    inputs: [
      {
        id: "email",
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "pasha@tehnik.com",
        value: "",
      },
      {
        id: "password",
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "K@nteynir_1",
        value: "",
      },
    ],
    error: null,
    accessToken: null,
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    inputId: string
  ) {
    const updatedInputs = state.inputs.map((input) => {
      if (input.id === inputId) {
        input.value = event.target.value;
      }
      return input;
    });

    setState({
      ...state,
      inputs: updatedInputs,
    });
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    // todo: валидация полей

    event.preventDefault();

    axios
      .post("http://127.0.0.1:8000/auth/users/tokens", {
        email: formRef.current.elements.email.value,
        password: formRef.current.elements.password.value,
      })
      .then(function (response) {
        setState({
          ...state,
          error: null,
          accessToken: response.data.access_token,
        });
      })
      .catch(function (error) {
        let updatedError = {};

        switch (error.code) {
          case "ERR_NETWORK":
            updatedError = {
              message: error.message,
              details: [],
            };
            break;
          case "ERR_BAD_REQUEST":
            updatedError = {
              message: `${error.response.status}: ${error.response.statusText}`,
              details: error.response.data.detail || [],
            };
            break;
        }

        setState({
          ...state,
          error: updatedError,
          accessToken: null,
        });
      });
  }

  return (
    <div className="loginForm">
      <h2>Login Form</h2>
      <div>
        <form ref={formRef} onSubmit={handleSubmit}>
          {state.inputs.map((input) => {
            return (
              <React.Fragment key={input.id}>
                <label>
                  <span>{input.label}</span>
                  <br />
                  <input
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={(event) => handleChange(event, input.id)}
                  />
                  <br />
                </label>
              </React.Fragment>
            );
          })}
          <button type="submit">Log In</button>
        </form>
        {state.error && (
          <div style={{ color: "red" }}>
            <h3>{state.error.message}</h3>
            {/* я ебал js */}
            {state.error.details && state.error.details.length > 0 && (
              <>
                <h4>Details:</h4>
                <ul>
                  {state.error.details.map((detail: any, idx: number) => (
                    <li key={idx}>
                      {detail.loc[1]}: {detail.msg}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
        {state.accessToken && (
          <div>
            <h3>Access token:</h3>
            <p style={{ color: "green", wordWrap: "break-word" }}>
              {state.accessToken}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
