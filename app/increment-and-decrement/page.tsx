// import { useState } from "react";

export default function IncrementAndDecrement() {
  // const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrement = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <>
      <button 
      // onClick={handleIncrement}
      >Increment {process.env.API_URL}</button>
      {/* <div>{counter}</div> */}
      {/* <button onClick={handleDecrement}>Decrement</button> */}
    </>
  );
}
