import React from 'react';
import {Route, NavLink} from "react-router-dom";
import Portfolio_all from "./Portfolio-All";
import Portfolio_photos from "./Portfolio-Photos";
import Portfolio_frontend from "./Portfolio-Frontend";
import Portfolio_films from "./Portfolio-Films";
import {Helmet} from "react-helmet/es/Helmet";

export default function Portfolio() {
    return (
        <>
            <Helmet>
                <title>PORTFOLIO PAGE | Ali Mahmudlu</title>
            </Helmet>

            <div className="port">
                <div className="container">
                    <span className="menu_header">Portfolio</span>
                    <h1 className="section_header">My Portfolio</h1>
                </div>
                <div className="container">
                    <div className="portfolio_header">
                        <ul className="portfolio_filters">
                            <li className="">
                                <NavLink exact to="/pages/portfolio" className="all"><p className="btn btn-custom d-flex align-items-center" type="submit">All</p></NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages/portfolio/photos" className="category-photo"><p className="btn btn-custom d-flex align-items-center" type="submit">Photos</p></NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages/portfolio/frontend" className="category-frontend"><p className="btn btn-custom d-flex align-items-center" type="submit">Front End</p></NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages/portfolio/film" className="category-film"><p className="active btn btn-custom d-flex align-items-center" type="submit">Films</p></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container portfolio_content">
                    <div id="portfolio_items" className="">
                        <Route exact path="/pages/portfolio">
                            <Portfolio_all/>
                        </Route>
                        <Route path="/pages/portfolio/photos">
                            <Portfolio_photos/>
                        </Route>
                        <Route path="/pages/portfolio/frontend">
                            <Portfolio_frontend/>
                        </Route>
                        <Route path="/pages/portfolio/film">
                            <Portfolio_films/>
                        </Route>
                    </div>
                </div>
            </div>
        </>
    )
}
