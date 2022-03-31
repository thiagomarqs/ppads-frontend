import React, { ReactElement } from 'react';
import { AdminPaths } from './AdminPaths';
import { AdminProps } from './AdminProps';
import BrowserGamesPage from './BrowserGamesPage/BrowserGamesPage';
import { BrowserGamesPageForm } from './BrowserGamesPageForm/BrowserGamesPageForm';
import CategoriesPage from './CategoriesPage/CategoriesPage';
import ReportsPage from './ReportsPage/ReportsPage';
import styles from './Admin.module.scss';

class Admin extends React.Component<AdminProps> {
  
  buildView(title: string, content: ReactElement) {
    return(
      <div className='container'>  
        <div className={'container ' + styles['content']}>

          <div className={'container ' + styles['header']}>
            <h2>{title}</h2>
            <hr />
          </div>

          <div className='container '>            
            {content}
          </div>

        </div>
      </div>
    )
  }

  render() {
    switch (this.props.path) {
      
      case AdminPaths.RELATORIOS:
        return(
          this.buildView('Relatórios', <ReportsPage />)
        );

      case AdminPaths.CATEGORIAS:
        return(
          this.buildView('Categorias', <CategoriesPage />)
        );

      case AdminPaths.BROWSER_GAMES:
        return(
          this.buildView('Browser Games', <BrowserGamesPage />)
        );
      
      case AdminPaths.BROWSER_GAMES_NEW:
        return(
          this.buildView('Novo Browser Game', <BrowserGamesPageForm />)
        );
      case AdminPaths.BROWSER_GAMES_EDIT_ID:
        return(
          this.buildView('Editar Browser Game', <BrowserGamesPageForm isEditing={true} id={this.props.match.params.id}/>)
        );
      case AdminPaths.BROWSER_GAMES_DELETE_ID:
        return(
          this.buildView('Deletar Browser Game', <BrowserGamesPageForm isDeleting={true} id={this.props.match.params.id}/>)
        );
    }
  }
}

export default Admin;
