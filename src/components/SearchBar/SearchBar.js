import { useState } from "react";
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieList from "../MovieList/MovieList";


const token = process.env.REACT_APP_TOKEN





function SearchBar() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false)
  
    const handleSearch = async (str='') => {
        if (str.length===0){
          return
        }
        try{
          if (query.trim() !== '') {              
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${token}`
                }
              };
              
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${str}`, options)
            const json = await response.json();
            setSearchResults(json.results.slice(0,5));
            setShowResults(true)
          }
      }catch (error){
          console.log('fetchData:',error)
      }


    };
  
    const handleKeyPress = (event) => {

      if (event.key === 'Escape'){
        setShowResults(false)        
      }
      
      if (event.key === 'Enter') {
        handleSearch(query);
      }
    };
  
    return (
      <>
      <div className="search-container">
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Buscar..."
        />
      
        <button onClick={() => handleSearch(query)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {showResults && 
        <MovieList list={searchResults}></MovieList>
        }
      </div>
      </>
    );
  }
  


export default SearchBar;