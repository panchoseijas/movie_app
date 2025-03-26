import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css'


function Header() {

    return (
        <header >
            <a href="/" className="logo">Movie Searcher</a>
            <SearchBar />
        </header>
    )
}



export default Header