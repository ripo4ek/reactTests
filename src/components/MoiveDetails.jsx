import React, { Component } from 'react';   

class MovieDetails extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Moive_ID:{this.props.match.params.id}</h1>
                <button className="btn btn-primary" 
                onClick={
                    ()=>this.props.history.push('/movies')
                }>Confirm</button>
            </div> 
        
         );
    }
}
 
export default MovieDetails;