import React, {useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import Blog_all from "./Blog-All";
import Blog_photos from "./Blog-Photos";
import Blog_films from "./Blog-Films";
import Blog_frontend from "./Blog-Frontend";
import $ from "jquery";
import {Helmet} from "react-helmet/es/Helmet";

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>BLOG PAGE</title>
            </Helmet>
            <div className="port">
                <div className="container">
                    <span className="menu_header">Blog</span>
                    <h1 className="section_header">My Blog</h1>
                </div>
                <div className="container">
                    <div className="portfolio_header">
                        <ul className="portfolio_filters">
                            <li className="">
                                <NavLink exact to="/pages/blog" className="all"><p className="btn btn-custom d-flex align-items-center" type="submit">All</p></NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages/blog/photos" className="category-photo"><p className="btn btn-custom d-flex align-items-center" type="submit">Photos</p></NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages/blog/frontend" className="category-frontend"><p className="btn btn-custom d-flex align-items-center" type="submit">Front End</p></NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages/blog/film" className="category-film"><p className="active btn btn-custom d-flex align-items-center" type="submit">Films</p></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container portfolio_content">
                    <div id="portfolio_items" className="">
                        <Route exact path="/pages/blog">
                            <Blog_all/>
                        </Route>
                        <Route path="/pages/blog/photos">
                            <Blog_photos/>
                        </Route>
                        <Route path="/pages/blog/frontend">
                            <Blog_frontend/>
                        </Route>
                        <Route path="/pages/blog/film">
                            <Blog_films/>
                        </Route>
                    </div>
                </div>
            </div>
        </>
    )
}
