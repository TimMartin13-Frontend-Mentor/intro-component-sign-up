import React, { useState } from 'react';
import {
  Card,
  Form,
  Input,
  InputWrapper,
  Button,
  Terms,
  Disclaimer,
} from './styles';
import Alert from './../Alert';
import AlertIcon from './../AlertIcon';

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
        {/* First Name */}
        <InputWrapper>
          <Input
            type='text'
            name='firstName'
            placeholder={firstName.error ? '' : 'First Name'}
            value={firstName.name}
            onChange={(e) =>
              setFirstName({ ...firstName, name: e.target.value, error: false })
            }
            error={firstName.error}
          />
          {/* Exclamation point on error */}
          {firstName.error ? <AlertIcon /> : ''}
        </InputWrapper>
        {/* Error text */}
        {firstName.error ? <Alert message={firstName.errorMessage} /> : ''}

        {/* Last Name */}
        <InputWrapper>
          <Input
            type='text'
            name='lastName'
            placeholder={lastName.error ? '' : 'Last Name'}
            value={lastName.name}
            onChange={(e) =>
              setLastName({ ...lastName, name: e.target.value, error: false })
            }
            error={lastName.error}
          />
          {/* Exclamation point on error */}
          {lastName.error ? <AlertIcon /> : ''}
        </InputWrapper>
        {/* Error text */}
        {lastName.error ? <Alert message={lastName.errorMessage} /> : ''}

        {/* Email */}
        <InputWrapper>
          <Input
            type='text'
            name='email'
            placeholder={email.error ? 'email@example/com' : 'Email Address'}
            value={email.address}
            onChange={(e) =>
              setEmail({
                ...email,
                address: e.target.value,
                error: false,
                errorMessage: '',
              })
            }
            error={email.error}
          />
          {/* Exclamation point on error */}
          {email.error ? <AlertIcon /> : ''}
        </InputWrapper>
        {/* Error text */}
        {email.error ? <Alert message={email.errorMessage} /> : ''}

        {/* Password */}
        <InputWrapper>
          <Input
            type='password'
            name='password'
            placeholder={password.error ? '' : 'Password'}
            value={password.pwd}
            onChange={(e) =>
              setPassword({ ...password, pwd: e.target.value, error: false })
            }
            error={password.error}
          />
          {/* Exclamation point on error */}
          {password.error ? <AlertIcon /> : ''}
        </InputWrapper>
        {/* Error text */}
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
