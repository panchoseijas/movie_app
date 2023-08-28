import MovieConteiner from '../Movie_Conteiner/Movie_conteiner';
import Header from '../Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../Footer';


function MainMovies() {

  return (
    <>
      <Header/>
      <MovieConteiner/>
      <Footer/>
    </>
  );
}

export default MainMovies;
