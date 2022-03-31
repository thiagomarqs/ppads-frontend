import { UserInfoProps } from "./UserInfoProps"
import styles from './UserInfo.module.scss';

const UserInfo = (props: UserInfoProps) => {
    return (
        <div className="d-flex flex-row align-items-center">
            <img className={styles['user-icon']} width="50px" src={props.imageLink} alt={`Imagem do usuário ${props.userDisplayName}`}></img>
            <h3 className={styles['user-display-name']} >{props.userDisplayName}</h3>
        </div>
    )
}

export default UserInfo;