"use client";

import { useState, useEffect } from "react";

export default function InputWithButton() {
  const [inputText, setInputText] = useState(""); // primitive => no need to create copies
  const [arrayList, setArrayList] = useState<string[]>([]); // non-primitive => object/array => need to create copies
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setError("");
  };

  const handleDeletion = (e: React.MouseEvent<HTMLElement>) => {
    const clickedId = (e.target as HTMLElement).getAttribute("data-item");
    const newList = arrayList.filter((item) => {
      return item !== clickedId;
    });
    setArrayList(newList);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (arrayList.length <= 2) {
      if (arrayList.includes(inputText)) {
        setError(
          "Seems like entered Item is already in the list, Try something else!"
        );
      } else {
        setArrayList([...arrayList, inputText]);
        setInputText("");
      }
    } else {
      setError(
        "Oops? List limit has been exceeded!, Try deleting something from the list."
      );
    }
  };

  return (
    <>
      <form className="text-center" onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-50 font-bold mb-2">
          Enter something to add in the list
        </label>
        <input
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={inputText}
          type="text"
          placeholder="Enter any text"
          onChange={handleOnChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Click to Submit
        </button>
      </form>
      <div className="text-center text-red-600 my-3">{error}</div>
      <ul className=" text-center py-2">
        {arrayList.map((item) => (
          <li className="font-semibold" key={item}>
            {item}
            <button
              className=" bg-red-400 text-white mx-3 l px-2 my-1 rounded py-2 focus:outline-none focus:shadow-outline"
              data-item={item}
              onClick={handleDeletion}>
              Delete Item
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
