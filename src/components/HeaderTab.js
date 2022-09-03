import React from "react";
import './HeaderTab.scss';

export const Header=()=>{
    return(
        <nav>
            <a href="#" className="selected">Delivery</a>
            <a href="#">Pickup</a>
        </nav>
    );
}