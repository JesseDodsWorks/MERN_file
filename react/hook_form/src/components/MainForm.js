
import React, { useState } from "react";

const MainForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    return (
      <>
        <form>
          <input type="text" placeholder="first name" onChange = { (event) => setFirstName(event.target.value) } />
          <input type="text" placeholder="last name" onChange = { (event) => setLastName(event.target.value) } />
          <input type="email" placeholder="email" onChange = { (event) => setEmail(event.target.value) } />
          <input type="password" placeholder="password" onChange = { (event) => setPassword(event.target.value) } />
          <input type="password" placeholder="confirm password" onChange = { (event) => setConfirmPassword(event.target.value) } />
        </form>

        <hr></hr>

        <p>firstName: { firstName}</p>
        <p>lastName: { lastName }</p>
        <p>email: { email }</p>
        <p>password: { password}</p>
        <p>confirmPassword: { confirmPassword}</p>
      </>
    );
  };
  
  export default MainForm;