import React, { Component } from 'react';

class Generes extends Component {
    state = {  }
    render() { 
        return (
            <ul className="list-group">
                
                <li key={'all'} onClick={()=>{this.props.onAllGeneres()}} className={this.props.activeGenre === "all"? "list-group-item active": "list-group-item"}>{"All Genres"}</li>
                {this.props.items.map(item => <li key={item._id} onClick={()=>{this.props.onSelect(item)}} className={this.props.activeGenre === item.name ? "list-group-item active": "list-group-item"}>{item.name}</li>)}
            </ul>
        );
    }
}
 
export default Generes;