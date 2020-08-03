import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import blogItems from "./Blog_List"

export default function Blog_all(props) {
    const [slice, setSlice] = useState(3);
    function loadMore() {
        setSlice(slice + 3);

    }
    return (
        <section className="pb-5">
            <div className="blog" id="blog_all">
                {blogItems.length === 0 ?
                    <>
                        <div className="blog_item color_1 category-">
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
                        {blogItems.slice(0, slice).map((item, index) => {
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
                {slice < blogItems.length &&
                <div className="blog_item color_1 d-block">
                    <a href="#" onClick={loadMore} id="loadMore_blog_all" className="viewall btn-custom btn_load_more align-items-center" type="button">Load More</a>
                </div>
                }
            </div>
        </section>
    )
}
