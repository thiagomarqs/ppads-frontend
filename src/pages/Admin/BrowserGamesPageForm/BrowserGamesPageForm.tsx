import React, { FormEvent } from "react";
import { Input } from "reactstrap";
import Form from "../../../components/Form";
import { BrowserGameService } from "../../../services/BrowserGameService";
import { Navigate } from "react-router-dom"; 
import { AdminPaths } from "../AdminPaths";
import { BrowserGamesPageFormState } from "./BrowserGamesPageFormState";
import { BrowserGamesPageFormProps } from "./BrowserGamesPageFormProps";
import { Button } from "../../../components/Button";
import { ButtonProps } from "../../../components/Button/ButtonProps";
import Select from 'react-select';
import { CategoryService } from "../../../services/CategoryService";

export class BrowserGamesPageForm extends React.Component<BrowserGamesPageFormProps, BrowserGamesPageFormState>{

  service = new BrowserGameService();
  categoryService = new CategoryService();
  
  constructor(props: {}) {
    super(props);

    this.state = {
      nome: '',
      idCategoria: 0,
      urlJogo: '',
      urlVideoDemonstracao: '',
      descricao: '',
      urlImagemIlustrativa: '',
      isSubmitted: false,
      returnToHome: false,
      isLoading: true,
      categorias: [],
      categoriasChoices: []
    }
  }

  selectOptions() {
    return this.state.categoriasChoices.map(c => {return {label: c.nome, value: c.id}})
  }

  handleSelectChange(idCategoria: number) {
    this.setState({idCategoria: idCategoria})
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { target } = event;
    const { id, value } = target;
    //@ts-ignore
    this.setState({
      [id]: value
    });
  }

  handleCreate(e: FormEvent) {
  
    if(document.querySelector('form')?.checkValidity()) {
      const { 
        nome, 
        idCategoria, 
        urlJogo, 
        urlVideoDemonstracao, 
        descricao, 
        urlImagemIlustrativa 
      } = this.state;

      this.service.insertBrowserGames({
        nome: nome, 
        categoriaId: idCategoria, 
        urlJogo: urlJogo, 
        urlVideoDemonstracao: urlVideoDemonstracao || '.', 
        descricao: descricao, 
        urlImagemIlustrativa: urlImagemIlustrativa,
        ativo: true
      })
      .then(() => this.setState({isSubmitted: true}))
      .catch((error) => console.error(error))
    }
  }

  handleDelete(id: any) {
    this.service.deleteBrowserGame(id)
      .then(() => this.setState({returnToHome: true}))
      .catch((error) => console.error(error))
  }

  handleUpdate (e: FormEvent) {
    //e.preventDefault();
    const { 
      nome, 
      idCategoria, 
      urlJogo, 
      urlVideoDemonstracao, 
      descricao, 
      urlImagemIlustrativa 
    } = this.state;

    this.service.updateBrowserGame((this.props.id as number), {
      //@ts-ignore
      id: this.props.id,
      nome: nome, 
      categoriaId: idCategoria, 
      urlJogo: urlJogo, 
      urlVideoDemonstracao: urlVideoDemonstracao, 
      descricao: descricao, 
      urlImagemIlustrativa: urlImagemIlustrativa 
    })
    .then(() => this.setState({isSubmitted: true}))
    .catch((error) => console.error(error))
  }

  loadBrowserGame(id: any) {
    this.service.getBrowserGame(id)
      .then(response => response.data.data)
      .then(data => {
        this.setState({isLoading: false});
        //@ts-ignore
        this.setState({...data})
      })
  }

  renderNewBrowserGamePage() {
    
    const buttons = [
      {className:'btn btn-secondary', message: 'Cancelar', link: `/admin/${AdminPaths.BROWSER_GAMES}`},
      {className:'btn btn-success', message: 'Adicionar', 'onClick': (e: React.FormEvent) => {this.handleCreate(e)}}
    ]

    return(
      <div>
        {this.state.isSubmitted && <Navigate to="/admin/browser-games"/>}
        {this.renderGenericPage(buttons, this.handleCreate)}
      </div>
    )
  }

  renderEditBrowserGamePage() {
    
    const buttons = [
      {className:'btn btn-secondary', message: 'Cancelar', link: `/admin/${AdminPaths.BROWSER_GAMES}`},
      {className:'btn btn-success', message: 'Atualizar', 'onClick': () => {}}
    ]

    return (
      <div>
        {this.state.isSubmitted && <Navigate to="/admin/browser-games"/>}
        {this.state.isLoading ? <p>Carregando...</p> : this.renderGenericPage(buttons, this.handleUpdate)}
      </div>
    )
  }

  renderDeleteBrowserGamePage() {
    return (
      <div>
        {this.state.returnToHome && <Navigate to="/admin/browser-games" />}
        <h2>Atenção!</h2>
        <p>Você tem certeza de que deseja deletar este browser game?</p>
        <p style={{color: 'red'}}>Esta ação não poderá ser desfeita.</p>
        <div>
          <Button className="btn btn-success" message="Sim" onClick={() => this.handleDelete(this.props.id)}/>
          <Button className="btn btn-secondary" message="Cancelar" onClick={() => this.setState({returnToHome: true})}/>
        </div>
      </div>
    )
  }

  renderGenericPage(buttons: ButtonProps[], onSubmit?: (e: FormEvent) => any) {
    return (
      <Form onSubmit={onSubmit?.bind(this)}
        fieldsAsReactElements={[
          <Input 
            className="form-control" 
            id="nome"  
            value={this.state.nome} 
            placeholder="Nome"  
            type="text"  
            required= {true}
            onChange={(e) => this.handleInputChange(e)} /> ,
          <Select 
            //@ts-ignore
            options={this.selectOptions()}
            placeholder="Categoria"
            //@ts-ignore
            onChange={option => this.handleSelectChange(option.value)}
            defaultValue={this.state.idCategoria}
          ></Select>,
          <Input 
            className="form-control" 
            id="urlJogo"  
            value={this.state.urlJogo} 
            placeholder="URL de acesso ao jogo"  
            type="text"  
            required= {true}
            onChange={(e) => this.handleInputChange(e)} /> ,
          <Input 
            className="form-control" 
            id="urlVideoDemonstracao"  
            value={this.state.urlVideoDemonstracao} 
            placeholder="URL do vídeo de demonstração (se houver)"  
            type="text"
            onChange={(e) => this.handleInputChange(e)} /> ,
          <textarea 
            className="form-control" 
            id="descricao" 
            value={this.state.descricao} 
            placeholder="Descrição (até 255 caracteres)"  
            required= {true} 
            maxLength={255}
            rows={5}
            
            onChange={(e) => this.handleInputChange(e)}></textarea>,
          <Input 
            className="form-control" 
            id="urlImagemIlustrativa"  
            value={this.state.urlImagemIlustrativa} 
            placeholder="URL da imagem ilustrativa"  
            type="text"  
            required= {true}
            onChange={(e) => this.handleInputChange(e)} /> 
        ]}
        buttons={buttons}
      />
    )
  }

  render() {
    if(this.props.isEditing) return this.renderEditBrowserGamePage();
    if(this.props.isDeleting) return this.renderDeleteBrowserGamePage();
    return this.renderNewBrowserGamePage();
  }

  componentDidMount() {
    if(this.props.isEditing) this.loadBrowserGame(this.props.id);
    this.categoryService.getAllCategories()
      .then(r => {
        this.setState({categoriasChoices: r.data.data});
        console.log(this.state.categoriasChoices);
      });
    
  }
}