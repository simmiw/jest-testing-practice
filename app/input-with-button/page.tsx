"use client";

import { useState } from "react";

export default function InputWithButton() {
  const [inputText, setInputText] = useState(""); // primitive => no need to create copies
  const [arrayList, setArrayList] = useState<string[]>([]); // non-primitive => object/array => need to create copies

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (arrayList.includes(inputText)) {
      return "This already exists";
    }
    setArrayList([...arrayList, inputText]);
    setInputText("");
  };

  return (
    <>
      <form  className ="text-center"onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-50 font-bold mb-2">Enter something to add in the list</label>
        <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={inputText}
          type="text"
          placeholder="Enter any text"
          onChange={handleOnChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Click to Submit</button>
      </form>
      <ul className=" text-center py-2">
        {arrayList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
