import { Button } from "../../../components/Button";
import Form from "../../../components/Form";
import styles from '../Admin.module.scss'
import 'devextreme/dist/css/dx.light.css';
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/data-grid";
import { Paths } from "../../../enums/Paths";
import { AdminPaths } from "../AdminPaths";
import CustomStore from "devextreme/data/custom_store";
import { CategoryService } from "../../../services/CategoryService";
import DevExpress from "devextreme";
import { CategoryPUTRequest } from "../../../models/Request/Category/CategoryPUTRequest";



export default function CategoriesPage() {

  const navigate = useNavigate();

  const handleEdit = (e: React.FormEvent, row: DevExpress.ui.dxDataGrid.Row) => {
    e.preventDefault();
    let toUpdateCategoryPage = '/' + Paths.ADMIN + '/' + AdminPaths.CATEGORIA_EDIT + '/' + row.data.id;
    let category: CategoryPUTRequest = {
      Id: row.data.id,
      Nome: row.data.nome,
      Ativo: row.data.ativo,
    }
    navigate(toUpdateCategoryPage, { state: category });
  }

  const handleDelete = (e: React.FormEvent, row: DevExpress.ui.dxDataGrid.Row) => {
    e.preventDefault();
    let toDeleteCategoryPage = '/' + Paths.ADMIN + '/' + AdminPaths.CATEGORIA_DELETE + '/' + row.data.id;
    let category: CategoryPUTRequest = {
      Id: row.data.id,
      Nome: row.data.nome,
      Ativo: row.data.ativo,
    }
    navigate(toDeleteCategoryPage, { state: category });
  }

  const customDataSource = new CustomStore({
    key: 'id',
    loadMode: "raw",
    load: async () => {
      const service = new CategoryService();
      return service.getAllCategories()
        .then(response => { console.log(response); return response.data.data })
        .catch(() => { throw 'Network error' });
    }
  });

  return (
    <div>
      <div className={styles['action-row']}>
        <Button
          className='btn btn-primary'
          message='Novo'
          onClick={() => {
            let category: CategoryPUTRequest = {
              Id: 0,
              Nome: '',
              Ativo: false,
            }
            navigate("new", {state: category})
          }}
        />
      </div>

      <div className='browser-games-datagrid'>


        <DataGrid
          //@ts-ignore
          dataSource={customDataSource}
          columnAutoWidth={true}
          allowColumnResizing={true}
          rowAlternationEnabled={true}
          searchPanel={{ visible: true }}
          wordWrapEnabled={true}
          headerFilter={{ visible: true, allowSearch: true }}
          grouping={{ contextMenuEnabled: true, allowCollapsing: true }}
          groupPanel={{ visible: true, allowColumnDragging: true }}
        >
          <Column
            dataField=''
            caption=''
            width={35}
            alignment='center'
            allowResizing={false}
            cellRender={data =>
              <div className={styles['data-grid-btn']} onClick={(e) => handleEdit(e, data)}>
                <i className='dx-icon-edit'></i>
              </div>
            }

          />
          <Column
            dataField=''
            caption=''
            width={35}
            alignment='center'
            allowResizing={false}
            cellRender={data =>
              <div className={styles['data-grid-btn']} onClick={(e) => handleDelete(e, data)}>
                <i className='dx-icon-remove'></i>
              </div>
            }
          />
          <Column dataField='id' width={50} />
          <Column dataField='nome' />
        </DataGrid>
      </div>
    </div>
  )
}