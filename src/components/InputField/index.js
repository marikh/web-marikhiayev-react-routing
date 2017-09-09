import React from 'react';
import classNames from 'classnames';
import './inputfield.css';
import { Prompt } from 'react-router-dom';

export default class InputField extends React.Component {
    
    changeText = (target) => {
        this.props.updateForm && this.props.updateForm(target.name, target.value);
    }
    
    render(){
        const inputProps = {
            name: this.props.name,
            required: this.props.required,
            value: this.props.value,
            onChange: (event) => this.changeText(event.target)
        }
        return (
            <div className={classNames(["input-field", this.props.value && "form-dirty"])}>
                { this.props.type === 'textarea' ? 
                    <textarea { ...inputProps }/> :
                    <input type={this.props.type} {...inputProps} />
                }
                <label>{this.props.label}</label>
            </div>
        )
    }
}