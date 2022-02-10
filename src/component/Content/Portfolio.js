import port_image from "../../assets/images/img1.jpg";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Isotope from "isotope-layout"
import portfolioItems from "../Portfolio/Portfolio_List";

export default function Portfolio() {
    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        setIsotope(
            new Isotope("#portfolio_items", {
                itemSelector: ".portfolio_item"
            })
        );
    }, []);

    React.useEffect(
        () => {
            if (isotope) {
                filterKey === "*"
                    ? isotope.arrange({ filter: `*` })
                    : isotope.arrange({ filter: `.${filterKey}` });
            }
        },
        [isotope, filterKey]
    );

    const [slice, setSlice] = useState(6);
    return (
        <>
            <section id="portfolio" className="portfolio_section"  data-aos='fade-up'>
                <div className=" pb-4">
                    <span className="menu_header">Portfolio</span>
                    <h1 className="section_header">My Portfolio</h1>
                    <div className="portfolio">
                        <div className="portfolio_header">
                            <ul id="portfolio_filters" className="portfolio_filters">
                                <li className={filterKey === "*" ? "active" : ""}>
                                    <a href="#" className="all" onClick={() => setFilterKey("*")}><p className="btn btn-custom d-flex align-items-center" type="submit">All</p></a>
                                </li>
                                <li className={filterKey === "category-photos" ? "active" : ""}>
                                    <a href="#" className="category-photos" onClick={() => setFilterKey("category-photos")}><p className="btn btn-custom d-flex align-items-center" type="submit">Photos</p></a>
                                </li>
                                <li className={filterKey === "category-frontend" ? "active" : ""}>
                                    <a href="#" className="category-frontend" onClick={() => setFilterKey("category-frontend")}><p className="btn btn-custom d-flex align-items-center" type="submit">Front End</p></a>
                                </li>
                                <li className={filterKey === "category-film" ? "active" : ""}>
                                    <a href="#" className="category-film" onClick={() => setFilterKey("category-film")}><p className="active btn btn-custom d-flex align-items-center" type="submit">Films</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="portfolio_content">
                            <div id="portfolio_items" className="row" data-aos='fade-up'>
                                {portfolioItems.length === 0 ?
                                    <>
                                        <div className="col-md-4 portfolio_item category-">
                                            <div className="box pt-75">
                                                <div className="box_resize">
                                                    <img src={port_image} className="img_image"/>
                                                    <div className="portfolio_item_content">
                                                        <div className="flex-group">
                                                            <h2>There is no items here yet...</h2>
                                                            <Link to="/pages/portfolio/"
                                                                  className="a_category">Portfolio</Link>
                                                            <p className="text-white">Please come back later</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        {portfolioItems.slice(0, slice).map((item, index) => {
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
                        </div>
                        <Link to="/pages/portfolio" className="btn btn-custom d-flex align-items-center" type="submit">View All</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
