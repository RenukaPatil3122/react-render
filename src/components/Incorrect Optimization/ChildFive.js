import React from "react";

export const ChildFive = ({ name }) => {
  console.log("ChildFive render");
  return <div>hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
