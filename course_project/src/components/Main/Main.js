import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "../Home/Home.js";
import  Store from '../Store/Store.js';
import Box from '../Box/Box.js'
import "./Main.css";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Universal Yums</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/store">View Our Candy Selection</NavLink></li>
                        <li><NavLink to="/box">Country Boxes</NavLink></li>
 
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/store" element={<Store />}/>
                        <Route path="/box" element={<Box />}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;