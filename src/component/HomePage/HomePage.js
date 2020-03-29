import React, {useState} from 'react';
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import Pages from "../Pages/Pages";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "./Page404";
import ScrollButton from "./Scroll-Button";

function HomePage() {
    const [visible, setVisible] = useState(true);
    function toggle() {
        setVisible(!visible);
    }
    return (
        <div>
            <ScrollButton scrollStepInPx="20" delayInMs="16.66"/>
            <Router forceRefresh={false}>
                <Switch>
                    <Route exact path="/">
                        <Sidebar toggle={toggle} visible={visible} setVisible={setVisible}/>
                        <Content toggle={toggle} visible={visible} setVisible={setVisible}/>
                    </Route>
                    <Route path="/pages">
                        <Navbar/>
                        <Pages/>
                    </Route>
                    <Route path="*">
                        <Page404/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default HomePage;
