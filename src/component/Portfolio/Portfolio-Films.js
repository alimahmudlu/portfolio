import React, {useCallback, useState} from "react";
import port_image from "../../assets/images/img1.jpg";
import {Link, Route} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {photos} from "./Portfolio-Photos";
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


export default function Portfolio_films() {
    return (
        <>
            <Route exact path="/pages/portfolio/films/">
                <section>
                    <div id="portfolio_films" className="row">
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
                    </div>
                    <a href="#" id="loadMore_films" className="btn-custom btn_load_more align-items-center" type="submit">Load More</a>
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
