

import React from 'react'

import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
    return (
        <div>
        <ul>
            <li >  <NavLink exact to="/" activeClassName="active321" >Home</NavLink> </li>
                <li > <NavLink to="/page1" activeClassName="active321" >Page1</NavLink>  </li>
                <li ><NavLink to="/page2" activeClassName="active321" >Page2</NavLink>  </li>
                <li> <NavLink to="/page3"  activeClassName="active321">Page3</NavLink> </li>

            
            </ul>
            
        </div>
    )
}

export default Nav
