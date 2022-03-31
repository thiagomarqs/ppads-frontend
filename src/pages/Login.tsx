import React from 'react';
import { ButtonProps } from '../components/Button/ButtonProps';
import Form from '../components/Form';
import { InputField } from '../components/Form/FormProps';

function Login() {

  const LoginFormFields: InputField[] = [
    {
      type: 'text',
      placeholder: 'Username',
      id: 'username'
    },
    {
      type: 'password',
      placeholder: 'Senha',
      id: 'senha'
    }
  ];

  const LoginFormButtons: ButtonProps[] = [
    {
      className: 'btn btn-success',
      message: 'Login',
      onClick: () => {}
    }
  ];

  return (
    <div className="Login">
      <div className="container">
        <Form fields={LoginFormFields} buttons={LoginFormButtons} />
      </div>
      
    </div>
  );
}

export default Login;
