

import React from 'react'
import './nav.css'
import { Link, NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div>

            <ul>
                <li >  <NavLink to="/" activeClassName="active">Home</NavLink> </li>
                <li > <NavLink to="/page1" activeClassName="active">Page1</NavLink>  </li>
                <li ><NavLink to="/page2" activeClassName="active">Page2</NavLink>  </li>
                <li> <NavLink to="/page3" activeClassName="active">Page3</NavLink> </li>

            </ul>

        </div>
    )
}

export default Nav
