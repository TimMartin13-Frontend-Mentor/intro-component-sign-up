import React from "react";
import { Card, Form, Input, Button, Terms, Disclaimer } from './styles'; 

const InputForm = () => {
  return (
    <Card>
      <Form>
        <Input type="text" name="firstName" placeholder="First Name"/>
        <Input type="text" name="lastName" placeholder="Last Name"/>
        <Input type="text" name="email" placeholder="Email Address"/>
        <Input type="text" name="password" placeholder="Password"/>
        <Button>Claim your free trial</Button>
        <Disclaimer>
          By clicking the button, you are agreeing to our<Terms> Terms and Services</Terms>
        </Disclaimer>
      </Form>
    </Card>
  )
}

export default InputForm;