import React from 'react';

const Input = (props) => {
    return ( 
    <div class="form-group">
        <label for={props.name}>{props.name}</label>
        <input 
        name={props.name} 
        onChange={props.onChange} 
        value={props.value} 
        id={props.value} 
        class="form-control"/>
        {props.error && <div className="alert alert-danger">
            {props.error}
        </div>}
    </div>
     );
}
 
export default Input;