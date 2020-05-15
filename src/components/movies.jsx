import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService"
import {getGenres} from "../services/fakeGenreService"
import  Like from "../components/like"
import Pagination from "../components/pagination"
import paginate from "../components/utilities/paginate"
import Genre from "../components/genres"
import {Link} from 'react-router-dom'
class Movies extends Component {
    state = { 
        Genres: getGenres(),
        Movies: paginate(getMovies(),1,5),
        activePage: 1,
        pageSize: 5,
        MoviesCount:  getMovies().length,
        activeGenre: "all"
     }
     deleteMovieHandler = (id) =>  {
         const filtred = this.state.Movies.filter(movie => movie._id !== id)
        this.setState({Movies : filtred})
     }
     clickHandler = (movie) => {
        const copy = [...this.state.Movies]
        const index = copy.indexOf(movie)
        copy[index] = {...movie}
        copy[index].liked  = !copy[index].liked
        this.setState({Movies:copy})
     }
     pageChangeHandler = (pageNum)=>{
        this.setState({
            activePage: pageNum,
            Movies: paginate(getMovies(),pageNum,this.state.pageSize),
            MoviesCount:  getMovies().length
        })
     }
     selectGenreHandler = (genre)=>{
         
        const genreMovies = getMovies().filter(movie => movie.genre._id === genre._id)
        console.log(genreMovies)
        console.log(genre)
        console.log(genreMovies.length)
         this.setState({
             activePage: 1,
             Movies: paginate(genreMovies,1,this.state.pageSize),
             MoviesCount: genreMovies.length,
             activeGenre: genre.name
         })
     }
     allGenresHandler = ()=>{
        this.setState({
            activePage: 1,
            Movies: paginate(getMovies(),1,this.state.pageSize),
            MoviesCount: getMovies().length,
            activeGenre: "all"
        })
     }
    render() { 
        if(this.state.Movies === null || this.state.Movies.length === 0)
            return <span>No Movies</span>
        return (  
            <React.Fragment>
                <div className='row'>
                    <div className="col col-lg-2">
                        <Genre activeGenre={this.state.activeGenre} onAllGeneres={this.allGenresHandler} onSelect ={this.selectGenreHandler} items={this.state.Genres}/>
                    </div>
                    <div className="col col-lg-10">
                    <span>Showing {this.state.Movies.length} in the database.</span>
                    <table className="table">
                        <thead>
                            <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genere</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>   
                        {this.state.Movies.map(movie =>(
                        <tr key = {movie._id}>
                            <td ><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like isLiked={movie.liked} movie={movie} onClick={this.clickHandler}/></td>
                            <td><button onClick = {()=>{this.deleteMovieHandler(movie._id)}} className="btn btn-danger btn-small">Delete</button></td>
                        </tr>
                        
                        ))}

                            </tbody>
                        </table>  
                    <Pagination onClick={this.pageChangeHandler} activePage={this.state.activePage} pageSize={this.state.pageSize} allItems={this.state.MoviesCount}/> 
                </div>
                </div>


     
            </React.Fragment>   
        );
    }
}
 
export default Movies;