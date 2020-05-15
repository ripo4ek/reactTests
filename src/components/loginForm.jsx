import React, { Component } from 'react';
import Input from './input'
import Form from './form'
import Joi from "joi"
class LoginForm extends Form {
    state = { 
        data :{
            username: "",
            password: ""
        },
        errors:{}
        
     }
     schema = {
         username: Joi.string().required().label('Username'),
         password: Joi.string().required().label('Password')
     }


    makeSubmit = ()=>{

    }

    render() { 
        return ( 
            <div class="offset-md-2 col-6">
                <form onSubmit={this.handleSubmit}>
                    {this.createInput("username","username")}
                    {this.createInput("password","password","passWord")}
                    {this.createButton("Submit")}
                </form>
            </div>

         );
    }
}
 
export default LoginForm;