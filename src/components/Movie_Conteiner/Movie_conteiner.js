import { useState, useEffect } from 'react';
import './Movie_conteiner.css'
import Movie from '../Movie';

const token = process.env.REACT_APP_TOKEN

function MovieConteiner() {
    const [trending, setTrending] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTrending = async () => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };

            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options)
            const json = await response.json();

            setTrending(json.results.slice(0, 18))
        } catch (error) {
            console.log('fetchData:', error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchTrending()
    }, []);

    const SkeletonMovies = () => {
        return Array(18).fill(0).map((_, index) => (
            <div key={index} className="skeleton skeleton-movie"></div>
        ));
    };

    return (
        <>
            <h1>Trending</h1>
            <div className='container'>
                {isLoading ? (
                    <SkeletonMovies />
                ) : (
                    trending.map(movie => (
                        <Movie
                            key={movie.id}
                            movieId={movie.id}
                            posterPath={movie.poster_path}
                            nombreClase='movie_poster'
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default MovieConteiner