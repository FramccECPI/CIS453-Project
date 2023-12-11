import React, { Component } from "react";
import countryBox from "./Imgs/countrybox.jpg";
import display from "./Imgs/display.jpg";
import gift from "./Imgs/gift.jpg";
import { NavLink } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            
            <div>
                <h2>Welcome to Universal Yums</h2>
                <div className="textBox1">
                    <p>Our Curated Country Boxes take you on a tasty trip to a different country with every box.
                     Each month, for a subscription of $16, you can taste confections from around the world</p>
                    <img src={countryBox} alt="Country box" className="imgBox"/>
                    <NavLink to='/box' ><button>Browse Our Country Boxes</button></NavLink>
                </div>
                <div className="textBox1">
                    <p>Try our massive selection of international treats, and once you've found your favorites shop for them all in our online store!</p>
                    <img src={display} alt="display" className="imgBox"/>
                    <NavLink to='/box' ><button>Browse Our Store</button></NavLink>
                </div>
                <div className="textBox1">
                    <p>Our selection of individual sweets and Country Boxes will 
                    be shipped right to your door every month or send it as a gift with a note to a friend or loved one</p>
                    <img src={gift} alt="gift" className="imgBox"/>
                    <NavLink to='/gift' ><button>Send a Gift</button></NavLink>
                </div>

            </div>
        );
    }
}
export default Home;