import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default class Policy extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Policy</title>
        </Helmet>
        <center>
          <Link
            to="/"
            style={{ color: "red", fontSize: "500%", fontFamily: "cursive" }}
          >
            Privacy - policy
          </Link>
        </center>
        <br />
        <div className="lead" style={{ fontSize: "160%" }}>
          <ul className="justify-content-start ml-5 col">
            <li className="row d-flex">
              This website is not promoting any brand or person and not taking
              any money from any business.
            </li>
            <li className="row d-flex">
              This website does not guarantee or uphold to any offers, as offer
              changes and are not provided by us.
            </li>
            <li className="row d-flex">
              This website may not be up to date. We do try to update it.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
