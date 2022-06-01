import React, { useState } from 'react';
import { ButtonProps } from '../../components/Button/ButtonProps';
import Form from '../../components/Form';
import { InputField } from '../../components/Form/FormProps';
import { RegisterPOSTRequest } from '../../models/Request/Auth/RegisterPOSTRequest';
import styles from './SignUp.module.scss';
import { AuthService } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

const authService = new AuthService();

function SignUp() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState<RegisterPOSTRequest>({
    DataNascimento: new Date(),
    Estado: '',
    NomeCompleto: '',
    Pais: '',
    Senha: '',
    UserName: ''
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = (await authService.register(userData)).data.token;
    if (token) {
      sessionStorage.setItem('token', `Bearer ${token}`);
      navigate('/recomendados');
      return;
    }
    alert("Algo deu errado! Por favor verifique os dados que você entrou.")
  }

  const SignUpFormButtons: ButtonProps[] = [
    {
      className: 'btn btn-success',
      message: 'Cadastrar',
      onClick: () => { }
    }
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>Registro</h1>
      </div>
      <div className={styles.form}>
        <Form onSubmit={e => handleSignUp(e)} buttons={SignUpFormButtons}>
          <input className="form-control" key='1' type={'text'} placeholder={'Nome Completo'} onChange={e => setUserData(previous => { previous.NomeCompleto = e.target.value; return previous })} />
          <input className="form-control" key='2' type={'text'} placeholder={'Username'} onChange={e => setUserData(previous => { previous.UserName = e.target.value.trim(); return previous })} />
          <input className="form-control" key='3' type={'password'} placeholder={'Senha'} onChange={e => setUserData(previous => { previous.Senha = e.target.value; return previous })} />
          <input className="form-control" key='4' type={'date'} placeholder={'Data de Nascimento'} onChange={e => setUserData(previous => { previous.DataNascimento = new Date(e.target.value); return previous })} />
          <input className="form-control" key='5' type={'text'} placeholder={'Estado'} onChange={e => setUserData(previous => { previous.Estado = e.target.value; return previous })} />
          <input className="form-control" key='6' type={'text'} placeholder={'País'} onChange={e => setUserData(previous => { previous.Pais = e.target.value; return previous })} />
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
