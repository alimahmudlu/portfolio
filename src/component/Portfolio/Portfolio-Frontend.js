import React, {useState} from "react";
import port_image from "../../assets/images/img1.jpg";
import {Link, Route} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";
import portfolioItems from "./Portfolio_List";

export default function Portfolio_frontend() {
    const [slice, setSlice] = useState(3);
    function loadMore() {
        setSlice(slice + 3);
    }
    return (
        <>
            <Route exact path="/pages/portfolio/frontend/">
                <section className="pb-5">
                    <div id="portfolio_all" className="row">
                        {portfolioItems.filter(function (item) { return item.portfolioCategory === "frontend"; }).length === 0 ?
                            <>
                                <div className="col-md-4 portfolio_item category-frontend">
                                    <div className="box pt-75">
                                        <div className="box_resize">
                                            <img src={port_image} className="img_image"/>
                                            <div className="portfolio_item_content">
                                                <div className="flex-group">
                                                    <h2>There is no items here yet...</h2>
                                                    <Link to="/pages/portfolio/" className="a_category">Portfolio</Link>
                                                    <p className="text-white">Please come back later</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                {portfolioItems.filter(function (item) {
                                    return item.portfolioCategory === "frontend";
                                }).slice(0, slice).map((item, index) => {
                                    return (
                                        <div
                                            className={["col-md-4 portfolio_item category-", item.portfolioCategory].join("")}>
                                            <div className="box pt-75">
                                                <div className="box_resize">
                                                    <img src={item.portfolioImage} className="img_image"/>
                                                    <div className="portfolio_item_content">
                                                        <div className="flex-group">
                                                            <h2>{item.portfolioName}</h2>
                                                            <Link
                                                                to={["/pages/portfolio/", item.portfolioCategory].join("")}
                                                                className="a_category">{item.portfolioCategory}</Link>
                                                            <Link
                                                                to={["/pages/portfolio/", item.portfolioCategory, "/view/in"].join("")}
                                                                className="btn btn-custom read_more d-flex align-items-center"
                                                                type="submit">View</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        }
                    </div>
                    {slice < portfolioItems.filter(function(item) { return item.portfolioCategory === "frontend"; }).length &&
                    <a href="#" onClick={loadMore} className="btn-custom btn_load_more align-items-center" type="button">Load More</a>
                    }
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
        <>
            <Route exact path="/pages/portfolio/frontend/view/in">
                <section>
                    <div className="description">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div>
                        <div>
                            <img className="w-100" src={port_image}/>
                        </div>
                        <ul className="fot">
                            <li>
                                <a href="/site.com" target="_blank" className="btn btn-custom d-flex align-items-center" type="submit">View site</a>
                            </li>
                            <li>
                                <a href="./demo" className="btn btn-custom d-flex align-items-center" type="submit">Live demo</a>
                            </li>
                        </ul>
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
            </Route>

            <Route path="/pages/portfolio/frontend/view/in/demo">
                <Portfolio_frontend_in_demo/>
            </Route>
        </>
    )
}

function Portfolio_frontend_in_demo() {
    return (
        <section>
            <div className="laptop box pt-56">
                <div className="content box_resize">
                    <iframe className="w-100 h-100" src="/pages/portfolio/" width="" height="" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="tablet box pt-175">
                        <div className="content box_resize">
                            <iframe className="w-100 h-100" src="/pages/portfolio/" width="" height="" frameBorder="0" allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="smartphone pt-175">
                        <div className="content box_resize">
                            <iframe className="w-100 h-100" src="/pages/portfolio/" width="" height="" frameBorder="0" allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}




