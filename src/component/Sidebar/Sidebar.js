import React from 'react';
import userimage from "./../../userimage.jpg";
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faLinkedinIn, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
        <div className={props.visible ? "sidebar is-open" : "sidebar"}>
            <div className="container-fluid">
                <div className="sidebar_header text-center">
                    <div className="user_image_box">
                        <div className="box pt-100">
                            <div className="box_resize">
                                <img src={userimage} className="user_image" alt="user pic" />
                            </div>
                        </div>
                    </div>
                    <div className="user_name">
                        <h1><Link to="#">Əli Mahmudlu</Link></h1>
                    </div>
                    <div className="user_details">
                        <span>alimahmudlu@gmail.com</span>
                    </div>
                </div>
                <div className="sidebar_content ">
                    <ul className="nav-pills text-center">
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#introduction">Introduction</a>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link className="nav-link" to="#about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#timeline">Timeline</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#contact">Contact</Link>
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
