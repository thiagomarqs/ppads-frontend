import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import Sidebar from "../../components/Sidebar";
import { SidebarProps } from "../../components/Sidebar/SidebarProps";
import { Categoria } from "../../entities/Categoria";
import { CategoryService } from "../../services/CategoryService";
import styles from './DefaultPage.module.scss';

const categoryService = new CategoryService();

interface Props extends SidebarProps {
  setCategories: any;
}

export default function DefaultPage(props: Props) {

  useEffect(() => {
    categoryService.getAllCategories()
      .then(r => {
        let categories: Categoria[] = r.data.data;
        props.setCategories(categories)
      })
  },[]);
  
  return (
    <div className={styles.container}>
      <Sidebar {...props} />
      <div className="main-content">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  )
}