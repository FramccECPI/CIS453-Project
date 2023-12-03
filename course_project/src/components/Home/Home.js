import React, { Component } from "react";
import "./macaroons.svg";
class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Universal Yums</h2>
                <p>Our Curated Country Boxes take you on a tasty trip to a different country with every box.
                     Each month, for a subscription of $16, you can taste confections from around the world</p>
                <div>
                    <img src="macaroons.svg" alt="Macaroon Box"></img>
                </div>
                <p>Try our massive selection of international treats, and once you've found your favorites shop for them all in our online store!</p>

                <p>Our selection of individual sweets and Country Boxes will 
                    be shipped right to your door every month or send it as a gift with a note to a friend or loved one</p>

            </div>
        );
    }
}
export default Home;