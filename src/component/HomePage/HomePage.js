import React, {useState} from 'react';
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import Pages from "../Pages/Pages";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "./Page404";

function HomePage() {
    const [visible, setVisible] = useState(true);
    function toggle() {
        setVisible(!visible);
    }
    return (
        <div>
            <Router forceRefresh={true}>
                <Switch>
                    <Route exact path="/">
                        <Sidebar visible={visible} setVisible={setVisible}/>
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
