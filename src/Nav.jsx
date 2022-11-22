import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className="nav_div">
                <header>
                    <nav>                        
                    <NavLink to="/">Home</NavLink> 
                     <NavLink to="/about">About</NavLink> 
                     <NavLink to="/search">Search</NavLink> 
                     <NavLink to="/contact">Contact</NavLink> 
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Nav
