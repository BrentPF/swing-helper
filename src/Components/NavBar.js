import React from 'react';
import { Link } from 'react-router-dom';//react doesnt use anchor tag for link! use this for proper link to routed urls
const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar; //default allows to import without specifying what function from this component (thus, a default)