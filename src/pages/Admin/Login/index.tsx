import { ButtonProps } from "../../../components/Button/ButtonProps";
import Form from "../../../components/Form";
import { InputField } from "../../../components/Form/FormProps";
import styles from './Login.module.scss';

export default function AdminLogin() {
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
      onClick: () => { }
    }
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>Administração do Site - Login</h1>
      </div>
      <div className={styles.form}>
        <Form fields={LoginFormFields} buttons={LoginFormButtons} />
      </div>
    </div>
  );
}