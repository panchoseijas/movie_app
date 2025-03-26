import { useState, useEffect } from "react";
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieList from "../MovieList/MovieList";

const token = process.env.REACT_APP_TOKEN

// Debounce helper function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false)

  const handleSearch = async (str = '') => {
    if (str.length === 0) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${str}`, options)
      const json = await response.json();
      setSearchResults(json.results.slice(0, 5));
      setShowResults(true);
    } catch (error) {
      console.log('fetchData:', error)
    }
  };

  // Create a debounced version of handleSearch
  const debouncedSearch = debounce(handleSearch, 500);

  // Use useEffect to trigger search when query changes
  useEffect(() => {
    debouncedSearch(query);
    // Cleanup function to cancel any pending debounced calls
    return () => debouncedSearch.cancel;
  }, [query]);

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setShowResults(false)
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