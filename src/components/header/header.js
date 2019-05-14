import React, { Component } from "react"

import "./header.css";


class Header extends Component {
    render() {
        return (
            <nav className="navbar background">
            <span className="navbar-brand mb-0 h1">Do You Remember "The Office"?</span>
            <span className="navbar-brand mb-0 h1"></span>
            <span className="navbar-brand mb-0 h1">Score: {this.props.score} | Top Score: {this.props.topScore}</span>
            
          </nav>
        )
    }
}

export default Header;
