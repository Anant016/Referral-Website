import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Link } from "react-router-dom";
import Item from "./Item";
import { Menu, Dropdown, Icon, Button } from "antd";
import "antd/dist/antd.css";
import { Helmet } from "react-helmet";
import firebaseConfig from "../config";
import axios from "axios";
import "../favicon.ico";
import { fixControlledValue } from "antd/lib/input/Input";
// Initialize Firebase
var config = firebaseConfig.firebaseConfig;
firebase.initializeApp(config);
const db = firebase.firestore();

export default class Main extends Component {
  state = {
    data: [],
    search: "",
    length: "",
    categorySelected: "",
  };

  componentWillMount() {
    // let daata = [];
    // let Referrals = db.collection("referrals");
    // Referrals.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.data());
    //     daata.push(doc.data());
    //   });
    //   this.setState({
    //     data: daata,
    //     length: daata.length,
    //   });
    // });
    axios.get("/all").then((data) => {
      this.setState({
        data: data.data,
        length: data.data.length,
      });
    });
  }

  // next.js

  loadshop() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category === "shopping") {
          daata.push(doc.data());
        }
      });
      this.setState({
        categorySelected: "Shopping",
        data: daata,
        length: daata.length,
      });
    });
  }

  loadprod() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category === "productive") {
          daata.push(doc.data());
        }
      });
      this.setState({
        categorySelected: "Productivity",
        data: daata,
        length: daata.length,
      });
    });
  }

  loadother() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category === "") {
          daata.push(doc.data());
        }
      });
      this.setState({
        categorySelected: "Miscallaneous",
        data: daata,
        length: daata.length,
      });
    });
  }

  loadpayment() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category === "payment") {
          daata.push(doc.data());
        }
      });
      this.setState({
        categorySelected: "Payment",
        data: daata,
        length: daata.length,
      });
    });
  }
  loadtravel() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category === "Travel") {
          daata.push(doc.data());
        }
      });
      this.setState({
        categorySelected: "Travel",
        data: daata,
        length: daata.length,
      });
    });
  }

  loadall() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        daata.push(doc.data());
      });
      this.setState({
        categorySelected: "Categories",
        data: daata,
        length: daata.length,
      });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc
            .data()
            .name.toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
      });
    });
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={this.loadall.bind(this)} rel="noopener noreferrer">
            No Filter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadshop.bind(this)} rel="noopener noreferrer">
            Shopping
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadprod.bind(this)} rel="noopener noreferrer">
            Productivity
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadtravel.bind(this)} rel="noopener noreferrer">
            Travel
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadpayment.bind(this)} rel="noopener noreferrer">
            Payment
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadother.bind(this)} rel="noopener noreferrer">
            Miscallaneous
          </a>
        </Menu.Item>
      </Menu>
    );
    let List = "";
    if (this.state.data === null) {
      List = "Loaing...";
    } else {
      if (this.state.data.length > 0) {
        List = this.state.data.map((item) => (
          <Item key={item.name} item={item} />
        ));
      } else {
        {
          List = <h4 className="mt-5">Loading...</h4>;
        }
      }
    }

    return (
      <div className="container mt-2 mb-5">
        <Helmet>
          <link rel="shortcut icon" href="favicon.ico" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Grab Coupon code is coupon codes / referrals for new users. Grab Coupons and Save Money by online offers, deals, discount by our latest Promo codes.  "
          />
          <meta
            name="keyword"
            content="grabon, grab on,grabcouponcode,grab coupon,coupon code,coupon, referral, earn money online, first users, new users, save money,save, Promo code, deals, discount,latest coupon, online shopping "
          />
          <meta
            property="og:description"
            content="Find Latest Coupons &amp; Offers For Online Shopping Sites. GrabOn Will Ensure You Get The Right Promo Codes, Deals &amp; Discount E-Gift Cards For 2020 | SAVE ON EVERYTHING"
          />
          <meta property="og:type" content="Website" />
          <title>Grab Coupon Code</title>
        </Helmet>
        <div className="row mb-3">
          <div className="col col-12 col-lg-3 col-sm-12 col-md-12 mt-2 mb-2 justify-content-center">
            <Dropdown overlay={menu}>
              <Button style={{ width: "100%", height: "2.7em" }}>
                {this.state.categorySelected !== ""
                  ? this.state.categorySelected
                  : "Categories"}{" "}
                <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
          <div className="justify-content-center order-first  mt-2 mb-2  align-items-center col col-12 col-lg-5 col-sm-12 col-md-12 ">
            <div className="col justify-content-center  align-items-center">
              <div className="d-flex flex-row">
                <Link
                  to="/"
                  style={{ fontSize: "210%", fontFamily: "Sriracha, cursive" }}
                >
                  <b>Run-Coupon</b>{" "}
                  <span
                    style={{
                      fontSize: "50%",
                      fontFamily: "Sriracha, cursive",
                      backgroundColor: "white",
                    }}
                    className="rounded-pill border border-danger"
                  >
                    <span className="ml-2 mr-2">
                      {this.state.length} offers
                    </span>
                  </span>
                </Link>
              </div>
              <div
                className="d-flex flex-row ml-2"
                style={{ fontWeight: "bold", fontFamily: "Sriracha, cursive" }}
              >
                for new users only.
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end">
            <label id="search" style={{ display: "none" }}>
              Search
            </label>
            <input
              id="search"
              style={{}}
              className="form-control"
              placeholder="Search"
              type="text"
              name="search"
              onChange={this.onChange.bind(this)}
              value={this.state.search}
            />
          </div>
        </div>
        <div className="mb-5" style={{ marginBottom: "500px" }}>
          {" "}
          {List}
        </div>
        {/* <a href="https://github.com/Anant016">@anant016</a> */}.
      </div>
    );
  }
}
