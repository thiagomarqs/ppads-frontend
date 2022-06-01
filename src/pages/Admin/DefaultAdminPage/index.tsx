import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import { SidebarProps } from "../../../components/Sidebar/SidebarProps";
import styles from './DefaultPage.module.scss';

export default function DefaultAdminPage(sidebarProps: SidebarProps) {
  return (
    <div className={styles.container}>
      <Sidebar {...sidebarProps} />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}