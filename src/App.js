import './App.css';
import MovieConteiner from './components/Movie_Conteiner/Movie_conteiner'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MainMovies from './components/MainMovies/MainMovies';
import MoviePage from './components/MoviePage/MoviePage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMovies/>}/>
        <Route path="/pelicula/:id" element={<MoviePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
