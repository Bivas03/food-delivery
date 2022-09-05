import React from "react";
import './RestaurantItem.scss';

export const RestaurantItem=()=>{
    return(
        <a href="#" id="restaurant-item">
            <div className="image-container">
                <img src={require("../assets/images/bg2.jpg")} alt="dish"></img>
                <button id="like-button"></button>
            </div>
            <div className="details-container">
                <div className="text">
                    <h3 id="restaurant-name">Farm Kitchen</h3>
                    <p id="time-distance"> 23- 30 min</p>
                </div>
                <div className="number-holder">4</div>
            </div>
        </a>
    )
}