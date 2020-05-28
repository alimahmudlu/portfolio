import React, {useState} from "react";
import port_image from "../../assets/images/img1.jpg";
import {Link} from "react-router-dom";
import portfolioItems from "./Portfolio_List";

export default function Portfolio_all() {
    const [slice, setSlice] = useState(3);
    function loadMore() {
        setSlice(slice + 3);

    }
    return (
        <section className="pb-5">
            <div id="portfolio_all" className="row">
                {portfolioItems.length === 0 ?
                    <>
                        <div className="col-md-4 portfolio_item category-">
                            <div className="box pt-75">
                                <div className="box_resize">
                                    <img src={port_image} className="img_image" alt="port img"/>
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
                        {portfolioItems.slice(0, slice).map((item) => {
                            return (
                                <div className={["col-md-4 portfolio_item category-", item.portfolioCategory].join("")}>
                                    <div className="box pt-75">
                                        <div className="box_resize">
                                            <img src={port_image} className="img_image" alt="port img"/>
                                            <div className="portfolio_item_content">
                                                <div className="flex-group">
                                                    <h2>{item.portfolioName}</h2>
                                                    <Link to={["/pages/portfolio/", item.portfolioCategory].join("")}
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
            {slice < portfolioItems.length &&
                <a href="#" onClick={loadMore} className="btn-custom btn_load_more align-items-center" type="button">Load More</a>
            }
        </section>
    )
}
