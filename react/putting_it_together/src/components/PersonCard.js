import React, { useState } from "react";

const PersonCard = (props) => {
  const [age, setAge] = useState(props.age);
  return (
    <>
      <h3>{ props.lastName + props.firstName }</h3>
      <p>Age: { age }</p>
      <p>hair color: { props.hairColor }</p>
      <button onClick={ () => setAge(age + 1) }>Add another birthday</button>
    </>
  );
}

export default PersonCard;