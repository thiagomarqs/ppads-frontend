import { Link } from "react-router-dom";
import { ButtonProps } from "./ButtonProps";

export function Button(props: ButtonProps) {
    if(props.link) {
        return (
            <Link to={props.link}><button key={props.key} className={'mx-1 ' + props.className} onClick={props.onClick}>{props.message}</button></Link>
        );
    }
        
    if(props.onClick) {
        return (
            <button key={props.key} className={'mx-1 ' + props.className} onClick={props.onClick}>{props.message}</button>  
        );
    }

    return (
        <button key={props.key} className={'mx-1 ' + props.className}>{props.message}</button>  
    );
}