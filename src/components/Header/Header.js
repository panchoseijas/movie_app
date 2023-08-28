import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import  {Link} from "react-router-dom";
import './Header.css'


function Header() {

    return (
        <header >
            <a href="/" className="logo">Movie Searcher</a>
            <SearchBar></SearchBar>
        </header>
    )
}



export default Header