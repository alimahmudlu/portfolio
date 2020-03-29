import React, {useState} from "react";
import {Route, Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";
import port_image from "../../assets/images/img1.jpg";
import blogItems from "./Blog_List";

export default function Blog_films(props) {
    const [slice, setSlice] = useState(3);
    function loadMore() {
        setSlice(slice + 3);

    }
    return (
        <>
            <Route exact path="/pages/blog/film/">
                <div className="pb-5">
                    <div className="blog" id="blog_films">
                        {blogItems.filter(function(item) { return item.blogCategory === "film"; }).length === 0 ?
                            <>
                                <div className="blog_item color_1 category-film">
                                    <div className="blog_item_icon bg_c">
                                        <Link to="/pages/blog/"><FontAwesomeIcon icon={faAlignCenter} /></Link>
                                    </div>
                                    <div className="blog_item_desc">
                                        <div className="blog_item_head">
                                            <h1>There is no items here yet... <span></span></h1>
                                        </div>
                                        <div className="blog_item_content">
                                            <div className="">
                                                <p>Please come back later</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                {blogItems.filter(function(item) { return item.blogCategory === "film"; }).slice(0, slice).map((item, index) => {
                                    return (
                                        <div className={["blog_item color_1 category-",item.blogCategory ].join("")}>
                                            <div className="blog_item_icon bg_c">
                                                <Link to={["/pages/blog/",item.blogCategory ].join("")}><FontAwesomeIcon icon={faAlignCenter} /></Link>
                                            </div>
                                            <div className="blog_item_desc">
                                                <div className="blog_item_head">
                                                    <h1>{item.blogName} <span>{item.blogPostDate}</span></h1>
                                                </div>
                                                <div className="blog_item_content">
                                                    <div className="">
                                                        <p>{item.blogContent}</p>
                                                    </div>
                                                    <div className="">
                                                        <Link to={["/pages/blog/",item.blogCategory,"/view/in" ].join("")} className="btn btn-custom d-flex align-items-center" type="submit">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        }
                        {slice < blogItems.filter(function(item) { return item.blogCategory === "film"; }).length &&
                        <div className="blog_item color_1 d-block">
                            <a href="#" onClick={loadMore} id="loadMore_blog_all" className="viewall btn-custom btn_load_more align-items-center" type="button">Load More</a>
                        </div>
                        }
                    </div>
                </div>
            </Route>
            <Route path="/pages/blog/films/view/in">
                <Blog_films_in/>
            </Route>
        </>
    )
}


function Blog_films_in() {
    return (
        <section>
            <div className="description">
                <h2>Lorem ipsum dolor sit amet <span>11.12.2019</span></h2>
            </div>
            <div>
                <div className="">
                    <img src={port_image} className="w-100" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque purus semper eget duis at. Quis enim lobortis scelerisque fermentum dui faucibus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Lacinia quis vel eros donec ac odio tempor. Est ultricies integer quis auctor. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Dictum varius duis at consectetur. Id ornare arcu odio ut. Arcu dui vivamus arcu felis bibendum ut tristique.

                        In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ultrices dui sapien eget mi proin sed libero enim sed. Ultricies integer quis auctor elit sed vulputate mi sit amet. Orci dapibus ultrices in iaculis. Vulputate eu scelerisque felis imperdiet. Sit amet cursus sit amet dictum sit amet justo donec. Diam phasellus vestibulum lorem sed. Et ligula ullamcorper malesuada proin libero nunc consequat. Gravida quis blandit turpis cursus in hac habitasse platea. Viverra nam libero justo laoreet sit amet. Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed enim ut sem viverra aliquet eget. Leo a diam sollicitudin tempor id eu nisl. In aliquam sem fringilla ut morbi tincidunt. Viverra accumsan in nisl nisi scelerisque eu. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mattis nunc sed blandit libero volutpat sed cras ornare. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Massa sed elementum tempus egestas sed sed.
                    </p>
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
