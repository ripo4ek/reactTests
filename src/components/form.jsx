import React, {Component} from 'react';
import Joi from "joi"
import Input from "./input"
class Form extends Component {
    state = {  
        data: {},
        errors: {}
    }
    validate = () => {
        const result = Joi.validate(this.state.data,this.schema, {abortEarly: false})
        if(!result.error) return null

        const errors = {}
        for(let item of result.error.details){
            errors[item.path[0]] = item.message
        }
        return errors;
    }
    validateProperty = ({name, value})=>{
        const propObj = {[name]:value}
        const schemaProperty = {[name]:this.schema[name]}
        const error = Joi.validate(propObj,schemaProperty)
        console.log(schemaProperty);
        if(error) return null;
        return error.details[0].message;
    }
    handleSubmit = e=>{
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}})
        if(errors) return;

        this.makeSubmit();

    }
    handleChange = ({currentTarget: input})=>{
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input)
        
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]
        const newAccount = {...this.state.data}
        newAccount[input.name] = input.value
        
        this.setState({data: newAccount, errors:errors})
    }
    createButton = (name)=>{
        return <button disabled={this.validate()} type="submit" class="btn btn-primary">{name}</button>
    }
    createInput = (name,label, type="text")=>{
       return <Input 
        name={name}
        value={this.state.data[name]}
        label={label}
        onChange={this.handleChange}
        error = {this.state.errors[name]}
        />
    }
}
 
export default Form;