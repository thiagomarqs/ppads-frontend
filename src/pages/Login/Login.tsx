import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from '../../components/Button/ButtonProps';
import Form from '../../components/Form';
import { InputField } from '../../components/Form/FormProps';
import { LoginPOSTRequest } from '../../models/Request/Auth/LoginPOSTRequest';
import { AuthService } from '../../services/AuthService';
import styles from './Login.module.scss';

const authService = new AuthService();

function Login() {

  const navigate = useNavigate();
  const [userData, setUserData] = useState<LoginPOSTRequest>({
    Password: '',
    Username: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    let token = ''

    authService.login(userData)
      .then(r => {
        token = r.data.token;

        if (token) {
          sessionStorage.setItem('token', `Bearer ${token}`);
        }
        else {
          alert("Usuário não encontrado. Tem certeza de que informou seus dados corretamente?");
        }
      })
      .then(() => {
        let to = '/recomendados';

        if (userData.Username === 'Admin') {
          to = '/admin/relatorios';
          alert("Administrador identificado. Será redirecionado à tela de administração.")
        }

        authService.getLoggedInUser(`Bearer ${token}`).then(r => {
          const userId = r.data.id
          const userName = r.data.nomeCompleto;
          sessionStorage.setItem('userId', `${userId}`);
          sessionStorage.setItem('userName', `${userName}`);
          sessionStorage.setItem('token', `Bearer ${token}`);
          navigate(to);
        })
      })
  }

  const LoginFormButtons: ButtonProps[] = [
    {
      className: 'btn btn-success',
      message: 'Login',
      onClick: (e) => handleLogin(e)
    }
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>Login</h1>
      </div>
      <div className={styles.form}>
        <Form onSubmit={(e) => handleLogin(e)} buttons={LoginFormButtons}>
          <input className="form-control" type={'text'} placeholder={'Usuário'} onChange={e => setUserData(previous => { return { Username: e.target.value, Password: previous?.Password } })} />
          <input className="form-control" type={'password'} placeholder={'Senha'} onChange={e => setUserData(previous => { return { Password: e.target.value, Username: previous?.Username } })} />
        </Form>
      </div>
    </div>
  );
}

export default Login;
