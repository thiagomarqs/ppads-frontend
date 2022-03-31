import { ReactElement } from "react";

export interface ButtonProps {
    key?: React.Key;
    className: string;
    message: string;
    onClick?: () => void;
    link?: string;
}