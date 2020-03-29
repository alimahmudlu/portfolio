import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import AOS from 'aos';
import blogItems from "../Blog/Blog_List";

export default function Blog() {
    const [slice, setSlice] = useState(3);
    AOS.init()
    return (
        <section id="blog" className="blog_section"  data-aos='fade-up'>
            <div className="pb-4">
                <span className="menu_header">Blog</span>
                <h1 className="section_header">My Blog</h1>
                <div className="blog">
                    {blogItems.length === 0 ?
                        <>
                            <div className="blog_item color_1 category-">
                                <div className="blog_item_icon bg_c">
                                    <Link to="/pages/blog/"><FontAwesomeIcon icon={faAlignCenter}/></Link>
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
                            {blogItems.slice(0, slice).map((item, index) => {
                                return (
                                    <div className={["blog_item color_1 category-", item.blogCategory].join("")}
                                         data-aos='fade-up'>
                                        <div className="blog_item_icon bg_c">
                                            <Link to={["/pages/blog/", item.blogCategory].join("")}><FontAwesomeIcon
                                                icon={faAlignCenter}/></Link>
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
                                                    <Link to={["/pages/blog/", item.blogCategory, "/view/in"].join("")}
                                                          className="btn btn-custom d-flex align-items-center"
                                                          type="submit">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    }
                    <div className="blog_item color_1">
                        <Link to="pages/blog" className="btn btn-custom d-flex align-items-center viewall" type="submit">View All</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
