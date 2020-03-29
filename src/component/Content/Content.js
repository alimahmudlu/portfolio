import React from 'react';
import "./content.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import { Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Services from "./Services";

function Content(props) {
    return (
        <div className={props.visible ? "content is-open" : "content"}>
            <button className="toggle_btn" onClick={props.toggle}>
                <FontAwesomeIcon icon={faAlignCenter} />
            </button>
            <div className="">
                <Switch>
                    <Route exact path="/">
                        {/*<Home/>*/}
                        <div className="container-fluid">
                            <About/>
                            <Services/>
                            <Timeline/>
                            <Portfolio/>
                            <Blog/>
                            <Subscribe/>
                            <Contact/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Content;
