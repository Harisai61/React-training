import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

 class Navigation extends Component {
    render() {
        return (
            <nav className="nav-wrapper red darken-3">
            <div>
               <ul className="right">
                <li> <NavLink to ="/">Home</NavLink></li>
                <li> <NavLink to="/About">About</NavLink> </li>
               <li><NavLink to="/Contact">Contact</NavLink></li>
               </ul> 
            </div>
            </nav>
        )
    }
}

export default Navigation
