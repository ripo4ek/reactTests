import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Like extends Component {
    render() { 
        const classIcon = ['heart']
        this.props.isLiked?classIcon.unshift('fas'):classIcon.unshift('far')
        return (         
            
            <FontAwesomeIcon onClick={()=>{this.props.onClick(this.props.movie)}} style={{cursor: "pointer"}} icon={classIcon}/>
        );
    }
}
 
export default Like;




