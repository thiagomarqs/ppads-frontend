import React from "react";
import { Button } from "../Button";
import style from './Form.module.scss';
import { FormProps, InputField } from './FormProps';

class Form extends React.Component<FormProps> {

    fieldToHtml(field: InputField, key: React.Key) {
        return (
            <div className="mb-3">
                <input key={key} {...field} className="form-control" />
            </div>
        );
    }

    renderWithInputsAsInputFields() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit} className={style['form-container']}>
                    {this.props.fields?.map((field, index) => this.fieldToHtml(field, index))}
                    <div className="d-flex justify-content-end">
                        {this.props.buttons.map((button, index) => <Button {...button} />)}
                    </div>
                </form>
            </div>
        );
    }

    renderWithInputsAsReactElements() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit} className={style['form-container']}>
                    {this.props.fieldsAsReactElements?.map((field, index) => <div className="mb-3">{field}</div>)}
                    <div className="d-flex justify-content-end">
                        {this.props.buttons.map((button, index) => <Button {...button} />)}
                    </div>
                </form>
            </div>
        );
    }

    render() {
        if (this.props.fields) return this.renderWithInputsAsInputFields();
        if (this.props.fieldsAsReactElements) return this.renderWithInputsAsReactElements();
        return (
            <div>
                <form onSubmit={this.props.onSubmit} className={style['form-container']}>
                    {this.props.children}
                    <div className="d-flex justify-content-end">
                        {this.props.buttons.map((button, index) => <Button {...button} />)}
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;