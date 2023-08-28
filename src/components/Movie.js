import React from "react";
import { Link } from 'react-router-dom';


function Movie({movieId,posterPath,nombreClase}){

    return(
        <a href={`/pelicula/${movieId}`} >
            <div className="image-container">
                <img className={nombreClase}  src={`https://image.tmdb.org/t/p/original/${posterPath}`}></img>
            </div>
        </a>
    )
}

export default Movie