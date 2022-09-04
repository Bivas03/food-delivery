import React from "react";
import './BottomTab.scss';

export const BottomTab=()=>{
    return(
        <div className="bottom-tab-wrapper">
            <ul className="bottom-tab-list">
                <li className="bottom-tab-item"><a href="#"><img src={require("../assets/icons/home.ico")} alt="item"></img>Home</a></li>
                <li className="bottom-tab-item"><a href="#"><img src={require("../assets/icons/search.ico")} alt="item"></img>Browse</a></li>
                <li className="bottom-tab-item"><a href="#"><img src={require("../assets/icons/bag.ico")} alt="item"></img>Grocery</a></li>
                <li className="bottom-tab-item"><a href="#"><img src={require("../assets/icons/receipt.ico")} alt="item"></img>Orders</a></li>
                <li className="bottom-tab-item"><a href="#"><img src={require("../assets/icons/account.ico")} alt="item"></img>Account</a></li>
            </ul>
        </div>
    )
}