import React, { useState } from "react";

const initState = {
  fname: "Bruce",
  lname: "Wayne",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    // person.fname = "Clark";
    // person.lname = "kent";
    // setPerson(person);

    const newPerson = { ...person };
    newPerson.fname = "Clark";
    newPerson.lname = "Kent";
    setPerson(newPerson);
  };

  console.log("useState render");
  return (
    <div>
      <button onClick={changeName}>
        {person.fname}
        {person.lname}
      </button>
    </div>
  );
};
