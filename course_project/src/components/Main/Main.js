import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "../Home/Home.js";
import  Store from '../Store/Store.js';
import Box from '../Box/Box.js';
import Gift from '../Gift/Gift.js';
import "./Main.css";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="background">
                    <h1>Universal Yums</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/store">View Our Candy Selection</NavLink></li>
                        <li><NavLink to="/box">Country Boxes</NavLink></li>
                        <li><NavLink to="/gift">Send a Gift</NavLink></li>
 
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/store" element={<Store />}/>
                        <Route path="/box" element={<Box />}/>
                        <Route path="/gift" element={<Gift />}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;