import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About</title>
        </Helmet>
        <Link
          to="/"
          style={{ color: "red", fontSize: "500%", fontFamily: "cursive" }}
        >
          Run-Coupon
        </Link>
        <br />
        <div className="lead" style={{ fontSize: "160%" }}>
          <ul className="justify-content-start ml-5 col">
            <li className="row d-flex">
              Almost Every Company, to increase their customers have a referral
              policy.
            </li>
            <li className="row d-flex">
              In which existing customers help bring more customers and in turn
              get rewards to both the old customer and the new customer.
            </li>
            <li className="row d-flex">
              So this platform is to help those first conversions,
              <b> and to find these coupon easily. </b> And get some rewards.
            </li>
            <li className="row d-flex">
              If you like the work. <b>Donate!!! </b>So I can keep this website
              updated and up and running for everyone.
            </li>
          </ul>
          <a
            href="https://www.buymeacoffee.com/anant016"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
              alt="Buy Me A Coffee"
              style={{ height: "51px", width: "217px" }}
            />
          </a>
        </div>
      </div>
    );
  }
}
