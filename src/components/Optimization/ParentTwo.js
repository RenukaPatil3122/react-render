import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Renuka");

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Patil")}>Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};
