import React from 'react';
import { ButtonProps } from '../components/Button/ButtonProps';
import Form from '../components/Form';
import { InputField } from '../components/Form/FormProps';

function SignUp() {

  const SignUpFormFields: InputField[] = [
    {
      type: 'text',
      placeholder: 'Nome Completo',
      id: 'nomeCompleto'
    },
    {
      type: 'text',
      placeholder: 'Username',
      id: 'username'
    },
    {
      type: 'password',
      placeholder: 'Senha',
      id: 'senha'
    },
    {
      type: 'date',
      placeholder: 'Data de Nascimento',
      id: 'dataNascimento'
    },
    {
      type: 'text',
      placeholder: 'Estado',
      id: 'estado'
    },
    {
      type: 'text',
      placeholder: 'País',
      id: 'pais'
    }
  ];

  const SignUpFormButtons: ButtonProps[] = [
    {
      className: 'btn btn-success',
      message: 'Cadastrar',
      onClick: () => {}
    }
  ];

  return (
    <div className="SignUp">
      <div className="container">
        <Form fields={SignUpFormFields} buttons={SignUpFormButtons} />
      </div>
      
    </div>
  );
}

export default SignUp;
