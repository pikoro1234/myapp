import React from 'react';
import './App.css';
import Welcome from './componentes/Welcome';
import Card from './componentes/Card';
import movies from './movies.png';
import addmovies from './addmovie.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {

  return (
    <Router>
      <div className="App">      
        <div className="container">
          <Switch>
            <Route path="/listado">
              <h1>listado</h1>
            </Route>
            <Route path="/nueva">
              <h1>form nueva</h1>
            </Route>
            <Route path="/">
              <h1 className="text-center my-lg-5">PROYECTO PELICULAS</h1>
              <Welcome name="Jorge"/>
              <div className="row">
                <div className="col-lg-6 col-12"></div>
                <div className="col-lg-6 col-12">
                  <Card image={movies} link="/listado" title="Listado de peliculas" subtitle="peliculas desde netflix" color="#C70039"/>
                  <Card image={addmovies} link="/nueva" title="Agregar nueva pelicula" subtitle="creacion nueva" color="#52BE80"/>
                </div>
              </div> 
            </Route>
          </Switch>                         
        </div>
      </div>    
    </Router>
  )
}

