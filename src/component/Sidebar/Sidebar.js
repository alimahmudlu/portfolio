import React, {useState} from 'react';
import userimage from "./../../userimage.jpg";
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

function Sidebar(props) {
    console.log(props.visible);
    return (
        <div className={props.visible ? "sidebar is-open" : "sidebar"}>
            <div className="container-fluid">
                <div className="sidebar_header text-center">
                    <div className="user_image_box">
                        <div className="box pt-100">
                            <div className="box_resize">
                                <img src={userimage} className="user_image" />
                            </div>
                        </div>
                    </div>
                    <div className="user_name">
                        <h1><a href="salam">Əli Mahmudlu</a></h1>
                    </div>
                    <div className="user_details">
                        <span>alimahmudlu@gmail.com</span>
                    </div>
                </div>
                <div className="sidebar_content ">
                    <ul className="nav-pills text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#introduction">Introduction</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#timeline">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="social-menu text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar_footer text-center">
                    <p><small>All rights reserved.</small></p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
