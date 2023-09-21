import React from "react";
import { Alert } from "react-bootstrap";

import { ErrorMessage } from "../types";

export default function AlertWithError({ message, details }: ErrorMessage) {
  return (
    <Alert variant={"danger"} className="my-3">
      <Alert.Heading as={"h2"} className="m-0">
        {message}
      </Alert.Heading>
      {details && (
        <>
          <hr />
          <div>
            <h4>Детали ошибки:</h4>
            <ul className="mb-0">
              {details.map((detail) => {
                return <li key={detail}>{detail}</li>;
              })}
            </ul>
          </div>
        </>
      )}
    </Alert>
  );
}
