import React from "react"
import List from "../List"
import UserInfo from "./UserInfo"
import styles from './Sidebar.module.scss';
import { SidebarProps } from "./SidebarProps";

class Sidebar extends React.Component<SidebarProps> {

    
    render() {
        return (
            <div className={styles['sidebar']}>
                <UserInfo imageLink="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" userDisplayName={sessionStorage.getItem('userName') || 'Usuário'}/>
                <List items={this.props.listItems} />
            </div>
        )
    }
}

export default Sidebar