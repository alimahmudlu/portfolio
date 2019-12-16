import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="">
                <div>
                    <span className="menu_header">About</span>
                    <h1 className="section_header">Who</h1>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div>
                    <span className="menu_header">About</span>
                    <h1 className="section_header">Who</h1>
                    <div className="">
                        <div className="row">
                            <div className="col-md-4 mb-md-0 mb-7">
                                <div className="service_box service_color_1">
                                    <div className="service_box_icon">
                                        <FontAwesomeIcon icon={faAlignCenter} />
                                    </div>
                                    <div className="service_desc">
                                        <div className="service_box_header">
                                            <h1>Web Development</h1>
                                        </div>
                                        <div className="service_box_content">
                                            <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                                        </div>
                                        <div className="service_box_footer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-md-0 mb-7">
                                <div className="service_box service_color_2">
                                    <div className="service_box_icon">
                                        <FontAwesomeIcon icon={faAlignCenter} />
                                    </div>
                                    <div className="service_desc">
                                        <div className="service_box_header">
                                            <h1>Web Development</h1>
                                        </div>
                                        <div className="service_box_content">
                                            <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                                        </div>
                                        <div className="service_box_footer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-md-0 mb-7">
                                <div className="service_box service_color_3">
                                    <div className="service_box_icon">
                                        <FontAwesomeIcon icon={faAlignCenter} />
                                    </div>
                                    <div className="service_desc">
                                        <div className="service_box_header">
                                            <h1>Web Development</h1>
                                        </div>
                                        <div className="service_box_content">
                                            <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                                        </div>
                                        <div className="service_box_footer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
