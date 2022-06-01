import React, { ReactElement } from "react";

export interface ButtonProps {
    key?: React.Key;
    className: string;
    message: string;
    onClick?: React.MouseEventHandler;
    link?: string;
}