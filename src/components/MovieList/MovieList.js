import React, { useReducer,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useKeyPress from '../../helpers/useKeyPress.js'

const initialState = { selectedIndex: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'arrowUp':
      return {
        selectedIndex:
          state.selectedIndex !== 0 ? state.selectedIndex - 1 : 5 - 1,
      };
    case 'arrowDown':
      return {
        selectedIndex:
          state.selectedIndex !== 5 - 1 ? state.selectedIndex + 1 : 0,
      };
    case 'select':
      return { selectedIndex: action.payload };
    default:
      throw new Error();
  }
};


const MovieList = ({list}) => {
    const navigate = useNavigate();
    const arrowUpPressed = useKeyPress('ArrowUp');
    const arrowDownPressed = useKeyPress('ArrowDown');
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (arrowUpPressed) {
          dispatch({ type: 'arrowUp' });
        }
      }, [arrowUpPressed]);
    
    useEffect(() => {
    if (arrowDownPressed) {
        dispatch({ type: 'arrowDown' });
    }
    }, [arrowDownPressed]);

    // const handleKeyDown = (event) => {
    //   if (event.key === 'Escape'){
    //     // navigate(`/movie/${id}`)
    //     console.log('aaa')
    //   }
    // }


    return (
      <div className="dropdown-content">
      {list.map( (movie,i) => (

        <div 
        key={movie.id} className={`dropdown-item ${i === state.selectedIndex ? 'selected-hover' : ''}`} 
        onClick={() => {
            dispatch({type: 'select', payload: i })
        }}
        onMouseEnter={() => {
            dispatch({type: 'select', payload: i })
        }}
        onMouseLeave={() => {
            dispatch({type: 'select', payload: -1 })
        }}
        >
        
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}></img>
            <a href={`/pelicula/${movie.id}`}>{movie.title}</a>
            <p>({movie.release_date.slice(0,4)})</p>
        </div
        >

      ))}

    </div>

    )
  }

export default MovieList