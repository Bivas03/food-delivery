import React from "react";
import './MenuItem.scss';

export const MenuItem=()=>{
    return(
        <div className="main-container">
            <div className="checkbox">
                <input type={"checkbox"} id="checkbox"></input>
            </div>
            <div className="details">
                <p id="title">Tandoori Chicken</p>
                <p id="description">Tandoori Chicken Chicken Chicken Chicken Chicken Chicken</p>
                <p id="price">Tandoori Chicken</p>
            </div>
            <div className="dish-image"></div>
        </div>
    );
}