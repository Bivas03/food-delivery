import React from "react";
import './About.scss';

export const About=()=>{
    return(
        <a href="#" id="dish">
            <div className="image-container">
                <img src={require("../assets/images/bg2.jpg")} alt="dish"></img>
            </div>
            <div className="details-container">
                <div className="text">
                    <h3 id="restaurant-name">Farm Kitchen</h3>
                    <p id="others"> 23- 30 min</p>
                </div>
            </div>
        </a>
    )
}