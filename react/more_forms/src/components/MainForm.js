
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
          { firstName && firstName.length < 2 ? <p>First name must be 2 or more letters!</p> : null }

          <input type="text" placeholder="last name" onChange = { (event) => setLastName(event.target.value) } />
          { lastName && lastName.length < 2 ? <p>Last name must be 2 or more letters!</p> : null }

          <input type="email" placeholder="email" onChange = { (event) => setEmail(event.target.value) } />
          { email && email.length < 5 ? <p>Last name must be 5 or more letters!</p> : null }

          <input type="password" placeholder="password" onChange = { (event) => setPassword(event.target.value) } />
          { password && password.length < 8 ? <p>The passwords must match and be at least 8 characters!</p> : null }
          { !(password === confirmPassword) ? <p>The passwords must match!</p> : null }

          <input type="password" placeholder="confirm password" onChange = { (event) => setConfirmPassword(event.target.value) } />
          { password && password.length < 8 ? <p>The passwords must match and be at least 8 characters!</p> : null }
          { !(password === confirmPassword) ? <p>The passwords must match!</p> : null }
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