import React from 'react';
import Blog from "../Blog/Blog";
import Portfolio from "../Portfolio/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../Content/Contact";
import Page404 from "../HomePage/Page404";

export default function Pages() {
    return (
        <>
            <Switch>
                <Route path="/pages/blog">
                    <Blog/>
                </Route>
                <Route path="/pages/portfolio">
                    <Portfolio/>
                </Route>
                <Route>
                    <Page404/>
                </Route>
            </Switch>
            <div className="container">
                <Contact/>
            </div>
        </>
    )
}
