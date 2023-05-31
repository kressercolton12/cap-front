import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function() {
    return (
        <div className='nav-bar'>
            <div className="left">

                <div className="nav-link">
                    <NavLink exact to ="/" activeClassName='nav-link-active'>
                        Home
                    </NavLink>
                </div>

                <div className="nav-link">
                    <NavLink exact to ="/about-us" activeClassName='nav-link-active'>
                        About
                    </NavLink>
                </div>

                <div className="nav-link">
                    <NavLink exact to ="/blog" activeClassName='nav-link-active'>
                        Blog
                    </NavLink>
                </div>

                <div className="nav-link">
                    <NavLink exact to ="/contact" activeClassName='nav-link-active'>
                        Contact
                    </NavLink>
                </div>
            </div>    
        </div>    
    )
}