import DataGrid, { Column, Button } from "devextreme-react/data-grid";
import styles from '../Admin.module.scss'
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import { BrowserGameService } from "../../../services/BrowserGameService";
import { BrowserGamesPageState } from "./BrowserGamesPageState";
import CustomStore from "devextreme/data/custom_store";
import { Button as CustomButton } from '../../../components/Button'
import { AdminPaths } from "../AdminPaths";
import { Link, Navigate } from "react-router-dom";
import { Paths } from "../../../enums/Paths";

class BrowserGamesPage extends React.Component<{}, BrowserGamesPageState> {

  service = new BrowserGameService();
  browserGames = this.service.getBrowserGames();

  constructor(props: {}) {
    super(props);

    this.state = {
      toEdit: false,
      toDelete: false,
      refreshPage: false
    }
  }

  handleEdit(id: number) {
    this.setState({toEdit: true});
  }

  render() {

    const customDataSource = new CustomStore({
      key: 'id',
      loadMode: "raw",
      load: async () => {
        return this.service.getBrowserGames() 
            .then(response => response.data.data)
            .catch(() => { throw 'Network error' });
      }
    });
    
    return (
      <div>
        {this.state.refreshPage && <Navigate to='/admin/browser-games'/> }
        <div className={styles['action-row']}>
          <CustomButton 
            className='btn btn-primary' 
            message='Novo' 
            link='new'
          />
        </div>
        
        <div className='browser-games-datagrid'>
          

          <DataGrid 
            //@ts-ignore
            dataSource={ customDataSource }
            columnAutoWidth={ true }
            allowColumnResizing={ true }
            rowAlternationEnabled={ true }
            searchPanel={ {visible: true} }
            wordWrapEnabled={ true }
            headerFilter={ {visible:true, allowSearch:true} }
            grouping={ {contextMenuEnabled: true, allowCollapsing: true} }
            groupPanel={ {visible: true, allowColumnDragging: true} }
          >
            <Column 
              dataField='' 
              caption='' 
              width={35}
              alignment='center' 
              allowResizing={false}
              cellRender={data =>
                <Link className={styles['data-grid-btn']} to={'/'+ Paths.ADMIN + '/' + AdminPaths.BROWSER_GAMES_EDIT + '/' + data.data.id}>
                  <i className='dx-icon-edit'></i>
                </Link>
              }
              
            />
            <Column 
              dataField='' 
              caption='' 
              width={35}
              alignment='center' 
              allowResizing={false}
              cellRender={data =>
                <Link className={styles['data-grid-btn']} to={'/'+ Paths.ADMIN + '/' + AdminPaths.BROWSER_GAMES_DELETE + '/' + data.data.id}>
                  <i className='dx-icon-remove'></i>
                </Link>
              }
            />
            <Column dataField='id' width={50}/>
            <Column dataField='idCategoria'/>
            <Column dataField='nome'/>
            <Column dataField='descricao' width={200}/>
            <Column dataField='urlJogo'/>
            <Column dataField='urlVideoDemonstracao'/>
            <Column dataField='urlImagemIlustrativa'/>
          </DataGrid>
        </div>
      </div>
    )
  }
}

export default BrowserGamesPage;