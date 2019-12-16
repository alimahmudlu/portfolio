import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Blog_all() {
    return (
        <>
            <div className="pb-5">
                <div className="blog" id="blog_all">
                    <div className="blog_item color_1 category-photo">
                        <div className="blog_item_icon bg_c">
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
                    <div className="blog_item color_1 category-frontend">
                        <div className="blog_item_icon bg_c ">
                            <Link to="/pages/blog/frontend/"><FontAwesomeIcon icon={faAlignCenter} /></Link>
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
                                    <Link to="/pages/blog/frontend/view/in" className="btn btn-custom d-flex align-items-center" type="submit">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_item color_1 category-film">
                        <div className="blog_item_icon bg_c">
                            <Link to="/pages/blog/films/"><FontAwesomeIcon icon={faAlignCenter} /></Link>
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
                                    <Link to="/pages/blog/films/view/in" className="btn btn-custom d-flex align-items-center" type="submit">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_item color_1 category-frontend">
                        <div className="blog_item_icon bg_c ">
                            <Link to="/pages/blog/frontend/"><FontAwesomeIcon icon={faAlignCenter} /></Link>
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
                                    <Link to="/pages/blog/frontend/view/in" className="btn btn-custom d-flex align-items-center" type="submit">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_item color_1 category-film">
                        <div className="blog_item_icon bg_c">
                            <Link to="/pages/blog/films/"><FontAwesomeIcon icon={faAlignCenter} /></Link>
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
                                    <Link to="/pages/blog/films/view/in" className="btn btn-custom d-flex align-items-center" type="submit">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_item color_1 d-block">
                        <a href="#" id="loadMore_blog_all" className="viewall btn-custom btn_load_more align-items-center" type="submit">Load More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
