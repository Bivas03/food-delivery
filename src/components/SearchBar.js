import React from "react";
import './SearchBar.scss';
export const SearchBar=()=>{
    return(
        <div className="search-filter">
            <div className="search-wrapper">
                <input type={"text"} id="search-bar" placeholder="Search"></input>
                <button id="search-clear"></button>
                <button id="search">Search</button>
            </div>
            <button id="filter"></button>
        </div>
    )
}