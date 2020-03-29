import React, {useCallback, useState} from "react";
import port_image from "../../assets/images/img1.jpg";
import {Link, Route} from "react-router-dom";
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";
import portfolioItems from "./Portfolio_List";


export default function Portfolio_films() {
    const [slice, setSlice] = useState(3);
    function loadMore() {
        setSlice(slice + 3);
    }
    return (
        <>
            <Route exact path="/pages/portfolio/films/">
                <section className="pb-5">
                    <div id="portfolio_all" className="row">
                        {portfolioItems.filter(function (item) { return item.portfolioCategory === "film"; }).length === 0 ?
                            <>
                                <div className="col-md-4 portfolio_item category-film">
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
                                    return item.portfolioCategory === "film";
                                }).slice(0, slice).map((item, index) => {
                                    return (
                                        <div
                                            className={["col-md-4 portfolio_item category-", item.portfolioCategory].join("")}>
                                            <div className="box pt-75">
                                                <div className="box_resize">
                                                    <img src={port_image} className="img_image"/>
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
                    {slice < portfolioItems.filter(function(item) { return item.portfolioCategory === "film"; }).length &&
                    <a href="#" onClick={loadMore} className="btn-custom btn_load_more align-items-center" type="button">Load More</a>
                    }
                </section>
            </Route>
            <Route path="/pages/portfolio/films/view/in">
                <Portfolio_films_in/>
            </Route>
        </>

    )
}


function Portfolio_films_in() {

    return (
        <section>
            <div className="description">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <Player poster={port_image}>
                    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                    <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

                    <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                </Player>
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
