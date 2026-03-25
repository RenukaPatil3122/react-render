import React, { useState } from "react";
// import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Renuka");

  const person = {
    fname: "Bruce",
    lname: "wayne",
  };

  const handleClick = () => {};

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Patil")}>Change Name</button>

      <MemoizedChildFive name={name} handleClick={handleClick} />
    </div>
  );
};
