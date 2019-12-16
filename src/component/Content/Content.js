import React from 'react';
import "./content.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Link} from "react-router-dom";
import port_image from "../../assets/images/img1.jpg"
import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

function Content(props) {
    return (
        <div className={props.visible ? "content is-open" : "content"}>
            <button className="toggle_btn" onClick={props.toggle}>
                <FontAwesomeIcon icon={faAlignCenter} />
            </button>
            <div className="">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                        <div className="container-fluid">
                            <About/>
                            <Timeline/>
                            <Portfolio/>
                            <Blog/>
                            <Contact/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Content;
