import { UserInfoProps } from "./UserInfoProps"
import styles from './UserInfo.module.scss';
import { useNavigate } from "react-router-dom";

const UserInfo = (props: UserInfoProps) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('perfil')} className={`${styles.userInfo} d-flex flex-row align-items-center`}>
            <img className={styles['user-icon']} width="50px" src={props.imageLink} alt={`Imagem do usuário ${props.userDisplayName}`}></img>
            <h3 className={styles['user-display-name']} >{props.userDisplayName}</h3>
        </div>
    )
}

export default UserInfo;