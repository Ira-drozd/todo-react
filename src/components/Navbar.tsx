import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = ()=>(
    <nav>
        <div className="nav-wrapper green accent-4">
            <a href="#" className="brand-logo center">React + Typescript</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><NavLink to="/" activeClassName='active'>Список дел</NavLink></li>
                <li><NavLink to="/about" activeClassName='active'>О нас</NavLink></li>
            </ul>
        </div>
    </nav>
)