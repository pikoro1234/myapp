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
import Listado from './pages/Listado';
import Crear from './pages/Crear';


export default function App() {

  return (
    <Router>
      <div className="App">      
        <div className="container">
          <Switch>
            <Route path="/listado" component={Listado}>
            </Route>
            <Route path="/crear" component={Crear}>
            </Route>
            <Route path="/">
              <h1 className="text-center my-lg-5">PROYECTO PELICULAS</h1>
              <Welcome name="Jorge"/>
              <div className="row">
                <div className="col-lg-6 col-12"></div>
                <div className="col-lg-6 col-12">
                  <Card image={movies} link="/listado" title="Listado de peliculas" subtitle="peliculas desde netflix" color="#C70039"/>
                  <Card image={addmovies} link="/crear" title="Agregar nueva pelicula" subtitle="creacion nueva" color="#52BE80"/>
                </div>
              </div> 
            </Route>
          </Switch>                         
        </div>
      </div>    
    </Router>
  )
}

