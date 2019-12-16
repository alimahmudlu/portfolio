import React from "react";
import port_image from "../../assets/images/img1.jpg";
import {Link, NavLink, Route} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Portfolio_frontend() {
    return (
        <>
            <Route exact path="/pages/portfolio/frontend/">
                <section>
                    <div id="portfolio_frontend" className="row">
                        <div className="col-md-4 portfolio_item category-frontend">
                            <div className="box pt-75">
                                <div className="box_resize">
                                    <img src={port_image} className="img_image"/>
                                    <div className="portfolio_item_content">
                                        <div className="flex-group">
                                            <h2>Portfolio name</h2>
                                            <Link to="/pages/portfolio/frontend/" className="a_category">Category</Link>
                                            <Link to="/pages/portfolio/frontend/view/in/" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 portfolio_item category-frontend">
                            <div className="box pt-75">
                                <div className="box_resize">
                                    <img src={port_image} className="img_image"/>
                                    <div className="portfolio_item_content">
                                        <div className="flex-group">
                                            <h2>Portfolio name</h2>
                                            <Link to="/pages/portfolio/frontend/" className="a_category">Category</Link>
                                            <Link to="/pages/portfolio/frontend/view/in/" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" id="loadMore_films" className="btn-custom btn_load_more align-items-center" type="submit">Load More</a>
                </section>
            </Route>
            <Route path="/pages/portfolio/frontend/view/in">
                <Portfolio_frontend_in/>
            </Route>
        </>
    )
}


function Portfolio_frontend_in() {
    return (
        <section>
            <div className="description">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <div>
                    <img className="w-100" src={port_image}/>
                    <a href="/site.com" target="_blank" className="btn btn-custom d-flex align-items-center" type="submit">View site</a>
                </div>
                <ul className="social_menu_ul">
                    <li className="">
                        <a className="btn btn-custom d-flex align-items-center" href="#">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li className="">
                        <a className="btn btn-custom d-flex align-items-center" href="#">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li className="">
                        <a className="btn btn-custom d-flex align-items-center" href="#">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
