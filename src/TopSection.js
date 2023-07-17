import React, { Component } from "react";

export default class TopSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-section">
          <div className="section">
            <h2>Left Section</h2>
            <p>This is the left Section</p>
          </div>
          <div className="section">
            <h2>Right Section</h2>
            <p>This is the right section.</p>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}
