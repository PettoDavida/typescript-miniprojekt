import React from "react";
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return(
        <div className="search">
            <form className="searchForm">
            <input id="searchText" type="text" placeholder="Search Location" />
            <input className="search-btn" type="submit" name="" value="Search"/>
            </form>
        </div>
    );
}

export default SearchBar;

