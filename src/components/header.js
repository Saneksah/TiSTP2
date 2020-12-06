import React from 'react'
import {NavLink} from "react-router-dom"

function Header(){
    return (
        <div class = "text">
         <ul>
            <li>
              <NavLink className="men1" exact="true" activeClassName="men2" to="/">Главная страница</NavLink>
            </li>
            <li>
              <NavLink className="men1" activeClassName="men2" to="/utka">Утёнок</NavLink>
            </li>
            <li>
              <NavLink className="men1" activeClassName="men2" to="/enot">Енот-полоскун</NavLink>
            </li>
          </ul>
        </div>
    );
}

export default Header;