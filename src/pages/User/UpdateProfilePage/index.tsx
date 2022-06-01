import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../../../components/Button/ButtonProps";
import Form from "../../../components/Form";
import { InputField } from "../../../components/Form/FormProps";
import { User } from "../../../entities/User";
import { UserPUTRequest } from "../../../models/Request/User/UserPUTRequest";
import { AuthService } from "../../../services/AuthService";
import DefaultContent from "../../DefaultPage/DefaultContent";

const authService = new AuthService();

const SignUpFormButtons: ButtonProps[] = [
  {
    className: 'btn btn-success',
    message: 'Atualizar',
    onClick: () => { }
  }
];



export default function UpdateProfile() {

  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    dataNascimento: '',
    estado: '',
    id: 0,
    nomeCompleto: '',
    pais: '',
    senha: '',
    username: '',
  })

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    if (document.querySelector('form')?.checkValidity()) {
      let payload: UserPUTRequest;
      payload = {
        DataNascimento: user.dataNascimento,
        Estado: user.estado,
        Id: user.id,
        NomeCompleto: user.nomeCompleto,
        Pais: user.pais,
        Senha: user.senha,
        Username: user.username,
        ativo: true
      }
      authService.updateUser(payload)
        .then(r => navigate("/recomendados"));
    }
  }

  useEffect(() => {
    authService.getLoggedInUser((sessionStorage.getItem('token') as string))
      .then(r => setUser(r.data));
  }, []);

  return (
    <DefaultContent titulo='Atualizar Cadastro'>
      <Form onSubmit={(e) => handleUpdate(e)} buttons={SignUpFormButtons}>
        <input onChange={(e) => { setUser((prev) => { return { ...prev, nomeCompleto: e.target.value } }) }} className="form-control" type={"text"} placeholder="Nome Completo" value={user?.nomeCompleto} />
        <input onChange={(e) => { setUser((prev) => { return { ...prev, username: e.target.value } }) }} className="form-control" type={"text"} placeholder="Username" value={user?.username} />
        <input onChange={(e) => { setUser((prev) => { return { ...prev, dataNascimento: e.target.value } }) }} className="form-control" type={"date"} placeholder="Data de Nascimento" value={user.dataNascimento ? new Date(user.dataNascimento).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]} />
        <input required onChange={(e) => { setUser((prev) => { return { ...prev, senha: e.target.value } }) }} className="form-control" type={"password"} placeholder="Senha" value={user.senha || ''} />
        <input onChange={(e) => { setUser((prev) => { return { ...prev, estado: e.target.value } }) }} className="form-control" type={"text"} placeholder="Estado" value={user?.estado} />
        <input onChange={(e) => { setUser((prev) => { return { ...prev, pais: e.target.value } }) }} className="form-control" type={"text"} placeholder="País" value={user?.pais} />
      </Form>
    </DefaultContent>
  );
}