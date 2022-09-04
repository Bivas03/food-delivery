import React from "react";
import './Categories.scss';

export const Categories=()=>{
    return(
        <div className="categories-wrapper">
            <ul className="categories-list">
                <li className="categories-item"><a href="#"><img src={require("../assets/images/bread.png")} alt="item"></img>Bakery Items</a></li>
                <li className="categories-item"><a href="#"><img src={require("../assets/images/coffee.png")} alt="item"></img>Coffee</a></li>
                <li className="categories-item"><a href="#"><img src={require("../assets/images/deals.png")} alt="item"></img>Deals</a></li>
                <li className="categories-item"><a href="#"><img src={require("../assets/images/desserts.png")} alt="item"></img>Desserts</a></li>
                <li className="categories-item"><a href="#"><img src={require("../assets/images/fast-food.png")} alt="item"></img>Fast Food</a></li>
                <li className="categories-item"><a href="#"><img src={require("../assets/images/shopping-bag.png")} alt="item"></img>Pick-Up</a></li>
                <li className="categories-item"><a href="#"><img src={require("../assets/images/soft-drink.png")} alt="item"></img>Soft Drinks</a></li>
            </ul>
        </div>
    )
}