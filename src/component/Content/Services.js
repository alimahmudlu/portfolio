import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Services() {
    return (
        <section className="skills" id="skills"  data-aos='fade-up'>
            <div className="">
                <div>
                    <span className="menu_header">Skills</span>
                    <h1 className="section_header">MY SKILLS</h1>
                    <div className="services">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 mb-lg-0 mb-7" data-aos='fade-up'>
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
                            <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-7 mb-7" data-aos='fade-up'>
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
                            <div className="col-lg-4 col-md-6 mb-lg-0 mb-7" data-aos='fade-up'>
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
