import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import Blog_all from "./Blog-All";
import Blog_photos from "./Blog-Photos";
import Blog_films from "./Blog-Films";
import Blog_frontend from "./Blog-Frontend";
import $ from "jquery";

export default function Blog() {
    return (
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
                            <NavLink to="/pages/blog/films" className="category-film"><p className="active btn btn-custom d-flex align-items-center" type="submit">Films</p></NavLink>
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
                    <Route path="/pages/blog/films">
                        <Blog_films/>
                    </Route>
                </div>
            </div>
        </div>
    )
}





$(function () {
    $("#blog_all .blog_item").slice(0, 3).show();
    if ($("#blog_all .blog_item:hidden").length == 0) {
        $("#loadMore_blog_all").hide();
    }
    $("#loadMore_blog_all").on('click', function (e) {
        e.preventDefault();
        $("#blog_all .blog_item:hidden").slice(0, 3).slideDown();
        if ($("#blog_all .blog_item:hidden").length == 0) {
            $("#loadMore_blog_all").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
$(function () {
    $("#blog_films .blog_item").slice(0, 3).show();
    if ($("#blog_films .blog_item:hidden").length == 0) {
        $("#loadMore_blog_films").hide();
    }
    $("#loadMore_blog_films").on('click', function (e) {
        e.preventDefault();
        $("#blog_films .blog_item:hidden").slice(0, 3).slideDown();
        if ($("#blog_films .blog_item:hidden").length == 0) {
            $("#loadMore_blog_films").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
$(function () {
    $("#blog_frontend .blog_item").slice(0, 3).show();
    if ($("#blog_frontend .blog_item:hidden").length == 0) {
        $("#loadMore_blog_frontend").hide(0);
    }
    $("#loadMore_blog_frontend").on('click', function (e) {
        e.preventDefault();
        $("#blog_frontend .blog_item:hidden").slice(0, 3).slideDown();
        if ($("#blog_frontend .blog_item:hidden").length == 0) {
            $("#loadMore_blog_frontend").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
$(function () {
    $("#blog_photos .blog_item").slice(0, 3).show();
    if ($("#blog_photos .blog_item:hidden").length == 0) {
        $("#loadMore_blog_photos").hide(0);
    }
    $("#loadMore_blog_photos").on('click', function (e) {
        e.preventDefault();
        $("#blog_photos .blog_item:hidden").slice(0, 3).slideDown();
        if ($("#blog_photos .blog_item:hidden").length == 0) {
            $("#loadMore_blog_photos").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
