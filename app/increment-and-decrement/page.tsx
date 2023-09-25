"use client";
import { useState } from "react";

export default function IncrementAndDecrement() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1 className="text-center"> Increment and Decrement</h1>
      <div className="text-center m-10 ">
        <button
          className=" font-bold py-2 px-4 text-white font-bold  rounded-full bg-blue-400"
          onClick={handleIncrement}
          disabled={counter === 5}>
          Increment
        </button>
        <div>{counter}</div>
        {counter === 0 ? <h2>You are at intital state of counter!</h2> : null}

        <button
          className=" font-bold py-2 px-4 text-white font-bold  rounded-full bg-blue-400"
          onClick={handleDecrement}
          disabled={counter === -5}>
          Decrement
        </button>
      </div>
    </>
  );
}
