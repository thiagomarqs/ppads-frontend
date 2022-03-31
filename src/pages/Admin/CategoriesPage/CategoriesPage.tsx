import { Button } from "../../../components/Button";
import Form from "../../../components/Form";
import styles from '../Admin.module.scss'
import 'devextreme/dist/css/dx.light.css';
import React from "react";

class CategoriesPage extends React.Component {
  
  form = 
    <Form 
      fields={[{id:"nome", placeholder:"Nome", type:"text"}]}
      buttons={
        [
          {className:'btn btn-secondary', message: 'Cancelar', 'onClick': () => {}},
          {className:'btn btn-success', message: 'Adicionar', 'onClick': () => {}}
        ]
      }
    />
  
  render() {
    return (
      <div >
        
        <div className={styles['action-row']}>
          <Button 
            className='btn btn-primary' 
            message='Novo' 
            onClick={() => alert("oi papai :)")}
          />
        </div>
        
        <p>Página em construção :)</p>

      </div>
    )
  }
}

export default CategoriesPage;