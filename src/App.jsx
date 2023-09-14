import React from "react";

import Holder from "./Holder";
import MovingDot from "./MovingDot";
import Form from "./Form";

export default function App() {
  return (
    <>
      <Holder>
        <div
          onClickCapture={() => {
            alert("something will be clicked!");
          }}
        >
          <Form />
        </div>
      </Holder>
    </>
  );
}
