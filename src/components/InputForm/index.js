import React, { useState } from "react";
import { Card, Form, Input, Button, Terms, Disclaimer } from './styles'; 


const InputForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name: ", firstName);
    if (!firstName) {
      console.log("First Name: ","error");
    }
    console.log("Last Name: ", lastName);
    if (!lastName) {
      console.log("Last Name: ","error");
    }
    console.log("Email: ", email);
    if (validEmail(email)) {
      console.log("Email: ","error");
    }
    console.log("Password: ", password);
    if (!password) {
      console.log("Password: ","error");
    }
  }

  function validEmail(text) {
    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
     
    return !regex.test(text);
  }

  return (
    <Card>
      <Form onSubmit={ e => { handleSubmit(e) } } noValidate>
        <Input 
          type="text" 
          name="firstName" 
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          error={error}
          />
        <Input 
          type="text" 
          name="lastName" 
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <Input 
          type="text" 
          name="email" 
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button>Claim your free trial</Button>
        <Disclaimer>
          By clicking the button, you are agreeing to our<Terms> Terms and Services</Terms>
        </Disclaimer>
      </Form>
    </Card>
  )
}

export default InputForm;