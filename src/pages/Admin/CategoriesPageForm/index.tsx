import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { ButtonProps } from "../../../components/Button/ButtonProps";
import Form from "../../../components/Form";
import { CategoryPOSTRequest } from "../../../models/Request/Category/CategoryPOSTRequest";
import { CategoryPUTRequest } from "../../../models/Request/Category/CategoryPUTRequest";
import { CategoryService } from "../../../services/CategoryService";

const buttons: ButtonProps[] = [{
  className: 'btn btn-primary',
  message: 'Salvar',
  onClick: () => { }
}]

const service = new CategoryService();

type Props = {
  isDeleting?: boolean;
  isCreating?: boolean;
}

export function CategoriesPageForm(props: Props) {

  const location = useLocation();

  const navigate = useNavigate();

  const { id } = useParams();

  //@ts-ignore
  const [nomeCategoria, setNomeCategoria] = useState((location.state as CategoryPUTRequest).Nome);

  const [novaCategoriaNome, setNovaCategoriaNome] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let categoria: CategoryPUTRequest = {
      Nome: nomeCategoria,
      Id: (location.state as CategoryPUTRequest).Id,
      Ativo: (location.state as CategoryPUTRequest).Ativo
    }
    service.update(categoria).then(r => navigate(-1))
  }

  const handleDelete = (id: any) => {
    service.delete(id).then(r => navigate(-1))
  }

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    let novaCategoria: CategoryPOSTRequest = {
      Ativo: true,
      Nome: novaCategoriaNome
    }
    service.create(novaCategoria).then(r => navigate(-1));
  }


  function renderDeleteCategoryPage() {
    return (
      <div>
        <h2>Atenção!</h2>
        <p>Você tem certeza de que deseja deletar esta categoria?</p>
        <p style={{ color: 'red' }}>Esta ação não poderá ser desfeita.</p>
        <div>
          <Button className="btn btn-success" message="Sim" onClick={() => handleDelete(id)} />
          <Button className="btn btn-secondary" message="Cancelar" onClick={() => navigate(-1)} />
        </div>
      </div>
    )
  }

  function renderDefaultPage() {
    return (
      <div>
        <Form onSubmit={e => handleSave(e)} buttons={buttons}>
          <input minLength={2} maxLength={30} value={nomeCategoria} onChange={(e) => setNomeCategoria(e.target.value)} className="form-control" type={'text'} placeholder={"Nome da Categoria"}></input>
        </Form>
      </div>
    )
  }

  function renderNewCategoryPage() {
    return (
      <div>
        <Form onSubmit={e => handleCreate(e)} buttons={buttons}>
          <input minLength={2} maxLength={30} value={novaCategoriaNome} onChange={(e) => setNovaCategoriaNome(e.target.value)} className="form-control" type={'text'} placeholder={"Nome da Categoria"}></input>
        </Form>
      </div>
    )
  }

  if ( props.isDeleting ) return renderDeleteCategoryPage();
  else if ( props.isCreating ) return renderNewCategoryPage();
  else return renderDefaultPage();

}