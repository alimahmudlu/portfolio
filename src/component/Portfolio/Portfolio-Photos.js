import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import port_image from "../../assets/images/img1.jpg";
import {Route, Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";
import portfolioItems from "./Portfolio_List";
import blogItems from "../Blog/Blog_List";

export default function Portfolio_photos() {
    const [slice, setSlice] = useState(3);
    function loadMore() {
        setSlice(slice + 3);
    }
    return (
        <>
            <Route exact path="/pages/portfolio/photos/">
                <section className="pb-5">
                    <div id="portfolio_all" className="row">
                        {portfolioItems.filter(function (item) { return item.portfolioCategory === "photos"; }).length === 0 ?
                            <>
                                <div className="col-md-4 portfolio_item category-photos">
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
                                    return item.portfolioCategory === "photos";
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
                    {slice < portfolioItems.filter(function(item) { return item.portfolioCategory === "photos"; }).length &&
                    <a href="#" onClick={loadMore} className="btn-custom btn_load_more align-items-center" type="button">Load More</a>
                    }
                </section>
            </Route>
            <Route path="/pages/portfolio/photos/view/in">
                <Portfolio_photos_in/>
            </Route>
        </>
    )
}


function Portfolio_photos_in() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <section>
            <div className="description">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
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


export const photos = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 4,
        height: 3
    }
];
