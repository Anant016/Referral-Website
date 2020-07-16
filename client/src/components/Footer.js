import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    let date = new Date();
    return (
      <div
        className="fixed-bottom mt-5"
        style={{ height: "50px", backgroundColor: "lightblue" }}
      >
        <div
        // style={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}
        >
          <div className="mt-2">
            <div className="row" style={{ fontWeight: "bold" }}>
              <div className="col ml-5">
                <Link to="/about" style={{ color: "black" }}>
                  About
                </Link>
                <br />
                <Link to="/" style={{ color: "black" }}>
                  Home
                </Link>
              </div>
              <div className="col">
                ©{date.getFullYear()}
                <br />
                <Link to="/policy" style={{ color: "black" }}>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
