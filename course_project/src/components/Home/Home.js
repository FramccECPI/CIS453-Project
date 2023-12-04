import React, { Component } from "react";
import countryBox from "./Imgs/countrybox.jpg";
import display from "./Imgs/display.jpg";
import { NavLink } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            
            <div>
                <h2>Welcome to Universal Yums</h2>
                <div className="textBox1">
                    <p>Our Curated Country Boxes take you on a tasty trip to a different country with every box.
                     Each month, for a subscription of $16, you can taste confections from around the world</p>
                    <img src={countryBox} alt="Country box" className="countryBox"/>
                    <NavLink to='/box' className="boxButton">Browse Our Country Boxes</NavLink>
                </div>
                <div className="textBox4">
                    <p>Try our massive selection of international treats, and once you've found your favorites shop for them all in our online store!</p>
                    <img src={display} alt="display" className="display"/>
                    <NavLink to='/box' className="storeButton">Browse Our Store</NavLink>
                </div>
                <div className="textBox3">
                    <p>Our selection of individual sweets and Country Boxes will 
                    be shipped right to your door every month or send it as a gift with a note to a friend or loved one</p>
                    <img src={display} alt="display2" className="display2"/>
                    <NavLink to='/gift' className="giftButton">Send a Gift</NavLink>
                </div>

            </div>
        );
    }
}
export default Home;