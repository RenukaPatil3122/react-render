import React from "react";
import { Child } from "../Parent Child/Child";

export const ChildTwo = () => {
  console.log("ChildTwo Render");
  return <div>ChildTwo Component</div>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);
