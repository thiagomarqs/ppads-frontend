import React from "react"
import List from "../List"
import UserInfo from "./UserInfo"
import styles from './Sidebar.module.scss';
import { SidebarProps } from "./SidebarProps";

class Sidebar extends React.Component<SidebarProps> {

    
    render() {
        return (
            <div className={styles['sidebar']}>
                <UserInfo imageLink="https://via.placeholder.com/150" userDisplayName="Fulano de Tal"/>
                <List items={this.props.listItems} />
            </div>
        )
    }
}

export default Sidebar