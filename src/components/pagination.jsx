import React, { Component } from 'react';

class Pagination extends Component {

    render() { 
        if(Math.ceil(this.props.allItems/this.props.pageSize) == 1){
            return null
        }
        return ( 
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {this.createNumArray().map(item =>
                    <li key={item} className={item === this.props.activePage? "page-item active":"page-item"}><a onClick={()=>{this.props.onClick(item)}} className="page-link">{item}</a></li>
                    )}
                </ul>
            </nav>
         );
    }
    createNumArray(){
        let result = [];
        for(let i = 1; i<Math.ceil(this.props.allItems/this.props.pageSize+1);i++){
            result.push(i)
        }
        return result
    }
}
 
export default Pagination;