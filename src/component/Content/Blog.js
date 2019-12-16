import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React from "react";

export default function Blog() {
    return (
        <section id="blog" className="blog_section">
            <div className=" pb-4">
                <span className="menu_header">Blog</span>
                <h1 className="section_header">My Blog</h1>
                <div className="blog">
                    <div className="blog_item color_1">
                        <div className="blog_item_icon bg_c category-photo">
                            <Link to="/pages/blog/photos/"><FontAwesomeIcon icon={faAlignCenter} /></Link>
                        </div>
                        <div className="blog_item_desc">
                            <div className="blog_item_head">
                                <h1>Blog item 1 <span>11.12.2019</span></h1>
                            </div>
                            <div className="blog_item_content">
                                <div className="">
                                    <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                                </div>
                                <div className="">
                                    <Link to="/pages/blog/photos/view/in" className="btn btn-custom d-flex align-items-center" type="submit">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_item color_1">
                        <Link to="pages/blog" className="btn btn-custom d-flex align-items-center viewall" type="submit">View All</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
