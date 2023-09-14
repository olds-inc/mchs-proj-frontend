import React, { useState } from "react";

function Form() {
  const [formFields, setFormFields] = useState({
    address: {
      name: "address",
      type: "text",
      placeholder: "Ввод адреса",
      label: "Адрес места проишествия",
    },
  });

  function onSumbit(event) {
    event.preventDefault();
    console.debug("attempt to submit form");

    validate();
  }

  function validate() {
    console.debug("validate form fields");
    console.debug(formFields);
  }

  return (
    <div>
      <h1>Создание карточки</h1>
      <form onSubmit={(event) => onSumbit(event)}>
        {Object.values(formFields).map((value) => (
          <Input key={value.name} {...value} />
        ))}
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}

function Input({ name, type, placeholder, label }) {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <label>
        <p>{label}</p>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChangeHandler}
        />
      </label>
    </>
  );
}

export default function CreateCardModal() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  function toggleCreateCardForm() {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <>
      <button onClick={toggleCreateCardForm}>Show Create Card Form</button>
      {isFormVisible && <Form />}
    </>
  );
}
