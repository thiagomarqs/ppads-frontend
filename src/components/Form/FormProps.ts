import React, { FormEvent, ReactElement } from 'react';
import { ButtonProps } from '../Button/ButtonProps';

export interface FormProps {
    onSubmit?: (e: FormEvent) => void;
    fields?: InputField[];
    fieldsAsReactElements?: ReactElement[];
    buttons: ButtonProps[];
}

export interface InputField {
    key?: React.Key;
    type: React.HTMLInputTypeAttribute;
    id: string;
    placeholder: string;
    required?: boolean;
    maxLength?: number;
}

export * as default from './FormProps';
