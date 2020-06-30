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
            <div className="row">
              <div className="col">
                <Link to="/about" style={{ color: "black" }}>
                  About
                </Link>
                <br />
                <Link to="/policy" style={{ color: "black" }}>
                  Privacy Policy
                </Link>
              </div>
              <div className="col">©{date.getFullYear()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
