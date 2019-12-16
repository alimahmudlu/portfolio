import React from "react";
import port_image from "../../assets/images/img1.jpg";
import {Link, Route} from "react-router-dom";

export default function Portfolio_all() {
    return (
        <section>
            <div id="portfolio_all" className="row">
                <div className="col-md-4 portfolio_item category-photo">
                    <div className="box pt-75">
                        <div className="box_resize">
                            <img src={port_image} className="img_image"/>
                            <div className="portfolio_item_content">
                                <div className="flex-group">
                                    <h2>Portfolio name</h2>
                                    <Link to="/pages/portfolio/photos/" className="a_category">Category</Link>
                                    <Link to="/pages/portfolio/photos/view/in" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
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
                                    <Link to="/pages/portfolio/frontend/view/in" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 portfolio_item category-film">
                    <div className="box pt-75">
                        <div className="box_resize">
                            <img src={port_image} className="img_image"/>
                            <div className="portfolio_item_content">
                                <div className="flex-group">
                                    <h2>Portfolio name</h2>
                                    <Link to="/pages/portfolio/films/" className="a_category">Category</Link>
                                    <Link to="/pages/portfolio/films/view/in" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 portfolio_item category-film">
                    <div className="box pt-75">
                        <div className="box_resize">
                            <img src={port_image} className="img_image"/>
                            <div className="portfolio_item_content">
                                <div className="flex-group">
                                    <h2>Portfolio name</h2>
                                    <Link to="/pages/portfolio/films/" className="a_category">Category</Link>
                                    <Link to="/pages/portfolio/films/view/in" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 portfolio_item category-photo">
                    <div className="box pt-75">
                        <div className="box_resize">
                            <img src={port_image} className="img_image"/>
                            <div className="portfolio_item_content">
                                <div className="flex-group">
                                    <h2>Portfolio name</h2>
                                    <Link to="/pages/portfolio/photos/" className="a_category">Category</Link>
                                    <Link to="/pages/portfolio/photos/view/in" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
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
                                    <Link to="/pages/portfolio/frontend/view/in" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" id="loadMore_all" className="btn-custom btn_load_more align-items-center" type="submit">Load More</a>
        </section>
    )
}
