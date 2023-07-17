import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav-head">
          <div className="logo-box">
            <a href="#">
              <img className="logo-img" src="img/logo1.png" alt="logo"></img>
            </a>
          </div>
          <div className="title-box">
            <h1>This is the Title</h1>
            <p>This is the Description</p>
          </div>
          <div className="login-box">
            <a href="#" className="nav-link">
              <p>Login</p>
            </a>
            <a href="#" className="nav-link">
              <p>Signup</p>
            </a>
          </div>
        </div>
        <div className="nav-body">
          <div>
            <a href="#" className="nav-link">
              <p>Home</p>
            </a>
          </div>
          <div>
            <a href="#" className="nav-link">
              <p>About</p>
            </a>
          </div>
          <div>
            <a href="#" className="nav-link">
              <p>Functions</p>
            </a>
          </div>
          <div>
            <a href="#" className="nav-link">
              <p>Contact</p>
            </a>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}
