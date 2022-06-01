import React, { ReactElement } from 'react';
import { AdminPaths } from './AdminPaths';
import { AdminProps } from './AdminProps';
import BrowserGamesPage from './BrowserGamesPage/BrowserGamesPage';
import { BrowserGamesPageForm } from './BrowserGamesPageForm/BrowserGamesPageForm';
import CategoriesPage from './CategoriesPage/CategoriesPage';
import ReportsPage from './ReportsPage/ReportsPage';
import styles from './Admin.module.scss';
import DefaultContent from '../DefaultPage/DefaultContent';
import { CategoriesPageForm } from './CategoriesPageForm';

class Admin extends React.Component<AdminProps> {

  buildView(title: string, content: ReactElement) {
    return (
      <DefaultContent titulo={title}>
        {content}
      </DefaultContent>
    )
  }

  render() {
    switch (this.props.path) {

      case AdminPaths.RELATORIOS:
        return (
          this.buildView('Relatórios', <ReportsPage />)
        );

      case AdminPaths.CATEGORIAS:
        return (
          this.buildView('Categorias', <CategoriesPage />)
        );

      case AdminPaths.BROWSER_GAMES:
        return (
          this.buildView('Browser Games', <BrowserGamesPage />)
        );

      case AdminPaths.BROWSER_GAMES_NEW:
        return (
          this.buildView('Novo Browser Game', <BrowserGamesPageForm />)
        );
      case AdminPaths.BROWSER_GAMES_EDIT_ID:
        return (
          this.buildView('Editar Browser Game', <BrowserGamesPageForm isEditing={true} id={this.props.match.params.id} />)
        );
      case AdminPaths.BROWSER_GAMES_DELETE_ID:
        return (
          this.buildView('Deletar Browser Game', <BrowserGamesPageForm isDeleting={true} id={this.props.match.params.id} />)
        );
      case AdminPaths.CATEGORIA_NEW:
        return (
          this.buildView('Nova Categoria', <CategoriesPageForm isCreating={true} />)
        );
      case AdminPaths.CATEGORIA_EDIT_ID:
        return (
          this.buildView('Editar Categoria', <CategoriesPageForm />)
        );
      case AdminPaths.CATEGORIA_DELETE_ID:
        return (
          this.buildView('Deletar Categoria', <CategoriesPageForm isDeleting={true} />)
        );
    }
  }
}

export default Admin;
