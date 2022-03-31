import { Link } from "react-router-dom";
import { ListItemProps } from "./ListItemProps";

const ListItem = (props:ListItemProps) => {
    return <li><Link to={props.link}>{props.title}</Link></li>
}

export default ListItem;