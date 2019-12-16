import port_image from "../../assets/images/img1.jpg";
import {Link} from "react-router-dom";
import React from "react";
import $ from "jquery";

export default function Portfolio() {
    return (
        <>
            <section id="portfolio" className="portfolio_section">
                <div className=" pb-4">
                    <span className="menu_header">Portfolio</span>
                    <h1 className="section_header">My Portfolio</h1>
                    <div className="portfolio">
                        <div className="portfolio_header">
                            <ul id="portfolio_filters" className="portfolio_filters">
                                <li className="active">
                                    <a href="#" className="all"><p className="btn btn-custom d-flex align-items-center" type="submit">All</p></a>
                                </li>
                                <li>
                                    <a href="#" className="category-photo"><p className="btn btn-custom d-flex align-items-center" type="submit">Photos</p></a>
                                </li>
                                <li>
                                    <a href="#" className="category-frontend"><p className="btn btn-custom d-flex align-items-center" type="submit">Front End</p></a>
                                </li>
                                <li>
                                    <a href="#" className="category-film"><p className="active btn btn-custom d-flex align-items-center" type="submit">Films</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="portfolio_content">
                            <div id="portfolio_items" className="row">
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
                                                    <Link to="/pages/portfolio/frontend/view/in/" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
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
                                                    <Link to="/pages/portfolio/films/view/in/" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
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
                                                    <Link to="/pages/portfolio/films/view/in/" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
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
                                                    <Link to="/pages/portfolio/frontend/view/in/" className="btn btn-custom read_more d-flex align-items-center" type="submit">View All</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/pages/portfolio" className="btn btn-custom d-flex align-items-center" type="submit">View All</Link>
                    </div>
                </div>
            </section>
        </>
    )
}


$(document).ready(function() {
    $('#portfolio_filters li a').click(function() {
        var filterClass = $(this).attr('class');
        $('#portfolio_filters li').removeClass('active');
        $(this).parent().addClass('active');

        if(filterClass == 'all') {
            $('#portfolio_items').children('div.portfolio_item').show('3000');
        }
        else {
            $('#portfolio_items').children('div div:not(.' + filterClass + ')').hide('3000');
            $('#portfolio_items').children('div div.' + filterClass).show('3000');
        }
        return false;
    });
});
