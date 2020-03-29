import React from 'react';
import { Switch, Route, NavLink, Link} from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Ali Mahmudlu</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink exact to="" activeClassName="active" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/blog/" activeClassName="active" className="nav-link">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/portfolio/" activeClassName="active" className="nav-link">Portfolio</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Az
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Az</a>
                                <a className="dropdown-item" href="#">En</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
