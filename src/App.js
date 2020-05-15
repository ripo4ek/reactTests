import React from "react";
import "./App.css";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Movies from "./components/movies"
import NavBar from './components/NavBar';
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from './components/customers';
import Rental from './components/rental';
import NotFound from './components/NotFound'
import MovieDetails from './components/MoiveDetails';
import LoginForm from './components/loginForm'
function App() {
  return (
    <React.Fragment>
      {iconInit()}
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path='/not-found' component={NotFound} />
          <Route path="/movies" component={Movies} />
          <Route path="/login" component={LoginForm} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>

      </div>
    </React.Fragment>

  );
}
function iconInit() {
  library.add(far, faHeart)
}
export default App;
