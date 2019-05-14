import React, { Component } from "react"
import "./jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid jumbocolor">
                <div className="container ">
                    <h1 className="display-4">The Office Clicky Game!</h1>
                    <p className="lead">Click on an image to earn points, but don't click on any image more than once!</p>
                </div>
            </div>
        )
    }

}

export default Jumbotron;