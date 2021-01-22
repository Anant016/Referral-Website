import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

export default class Add extends Component {
  state = {
    name: "",
    category: "",
    description: "",
    downloadurl: "",
    imageurl: "",
    reward: "",
    refercode: "Go to Link",
  };
  onSubmit() {
    let db = firebase.firestore();
    let Referrals = db.collection("referrals");
    console.log(this.state);
    Referrals.doc(this.state.name).set(this.state);
  }

  onDelete() {
    let db = firebase.firestore();
    let Referrals = db.collection("referrals");

    Referrals.doc(this.state.name).delete();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          name="name"
          className="form-control mb-2 mt-2"
          placeholder="name"
          style={{ width: "50%" }}
          onChange={this.onChange.bind(this)}
          value={this.state.name}
          type="text"
        />
        {/* <input
          name="category"
          className="form-control mb-2 mt-2"
          placeholder="category"
          style={{ width: "50%" }}
          onChange={this.onChange.bind(this)}
          value={this.state.category}
          type="text"
        /> */}
        <select
          name="category"
          value={this.state.category}
          onChange={this.onChange.bind(this)}
          className="form-control mb-2 mt-2"
          placeholder="category"
          style={{ width: "50%" }}
        >
          <option value="payment">Payment</option>
          <option value="Travel">Travel</option>
          <option value="productive">Productive</option>
          <option value="shopping">Shopping</option>
          <option value="crypto">Cryptocurrency</option>
          <option value="">Miscallaneous</option>
        </select>
        <input
          name="description"
          className="form-control mb-2 mt-2"
          placeholder="description"
          style={{ width: "50%" }}
          onChange={this.onChange.bind(this)}
          value={this.state.description}
          type="text"
        />
        <input
          name="refercode"
          className="form-control mb-2 mt-2"
          placeholder="refercode"
          style={{ width: "50%" }}
          onChange={this.onChange.bind(this)}
          value={this.state.refercode}
          type="text"
        />
        <input
          name="downloadurl"
          className="form-control mb-2 mt-2"
          placeholder="downloadurl"
          style={{ width: "50%" }}
          onChange={this.onChange.bind(this)}
          value={this.state.downloadurl}
          type="text"
        />
        <input
          name="imageurl"
          className="form-control mb-2 mt-2"
          placeholder="imageurl"
          style={{ width: "50%" }}
          onChange={this.onChange.bind(this)}
          value={this.state.imageurl}
          type="text"
        />
        <input
          name="reward"
          className="form-control mb-2 mt-2"
          placeholder="reward"
          style={{ width: "50%" }}
          onChange={this.onChange.bind(this)}
          value={this.state.reward}
          type="text"
        />
        <button
          onClick={this.onSubmit.bind(this)}
          className="form-control"
          type="submit"
        >
          ADD
        </button>
        <button
          onClick={this.onDelete.bind(this)}
          className="form-control bg-danger"
          type="submit"
          style={{ backgroundColor: "red", color: "white" }}
        >
          Delete
        </button>
      </div>
    );
  }
}
