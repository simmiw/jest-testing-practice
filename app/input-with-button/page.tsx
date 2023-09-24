"use client";

import { useState } from "react";

export default function InputWithButton() {
  const [inputText, setInputText] = useState("");

  // const handleOnChange = (e) => {
  //   setInputText(e.target.value);
  // };

  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          type="text"
          placeholder="Enter any text"
          // onChange={handleOnChange}
        />
        <button>Click to Submit</button>
      </form>
    </>
  );
}
