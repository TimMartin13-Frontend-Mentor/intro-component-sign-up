import React, { useState } from 'react';
import { Card, Form, Input, Button, Terms, Disclaimer } from './styles';
import Alert from './../Alert';

const InputForm = () => {
  const [firstName, setFirstName] = useState({
    name: '',
    error: false,
    errorMessage: 'First Name cannot be empty',
  });
  const [lastName, setLastName] = useState({
    name: '',
    error: false,
    errorMessage: 'Last Name cannot be empty',
  });
  const [email, setEmail] = useState({
    address: '',
    error: false,
    errorMessage: '',
  });
  const [password, setPassword] = useState({
    pwd: '',
    error: false,
    errorMessage: 'Password cannot be empty',
  });
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.name) {
      setFirstName({ ...firstName, error: true });
    }

    if (!lastName.name) {
      setLastName({ ...lastName, error: true });
    }

    if (!email.address) {
      setEmail({
        ...email,
        error: true,
        errorMessage: 'Email cannot be empty',
      });
    } else if (validEmail(email.address)) {
      setEmail({
        ...email,
        error: true,
        errorMessage: 'Looks like this is not an email',
      });
    }

    if (!password.pwd) {
      setPassword({ ...password, error: true });
    }
  };

  function validEmail(text) {
    const regex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    return !regex.test(text);
  }

  return (
    <Card>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        noValidate
      >
        <div>
          <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName.name}
            onChange={(e) =>
              setFirstName({ ...firstName, name: e.target.value, error: false })
            }
            error={firstName.error}
          />
          {firstName.error ? <Alert message={firstName.errorMessage} /> : ''}
        </div>
        <Input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={lastName.name}
          onChange={(e) =>
            setLastName({ ...lastName, name: e.target.value, error: false })
          }
        />
        {lastName.error ? <Alert message={lastName.errorMessage} /> : ''}
        <Input
          type='text'
          name='email'
          placeholder='Email Address'
          value={email.address}
          onChange={(e) =>
            setEmail({
              ...email,
              address: e.target.value,
              error: false,
              errorMessage: '',
            })
          }
        />
        {email.error ? <Alert message={email.errorMessage} /> : ''}
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={password.pwd}
          onChange={(e) =>
            setPassword({ ...password, pwd: e.target.value, error: false })
          }
        />
        {password.error ? <Alert message={password.errorMessage} /> : ''}
        <Button>Claim your free trial</Button>
        <Disclaimer>
          By clicking the button, you are agreeing to our
          <Terms> Terms and Services</Terms>
        </Disclaimer>
      </Form>
    </Card>
  );
};

export default InputForm;
