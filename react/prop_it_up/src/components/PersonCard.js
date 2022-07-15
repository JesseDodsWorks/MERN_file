import React from "react";

const PersonCard = (props) => {
  return (
    <>
      <h3>{ props.lastName + props.firstName }</h3>
      <p>Age: { props.age }</p>
      <p>hair color: { props.hairColor }</p>
    </>
  );
}

export default PersonCard;