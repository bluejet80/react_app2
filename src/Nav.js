import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className='nav-head'>
        <div className='logo-box'>
            <a href="#"><img className='logo-img' src="img/logo1.png"></img></a>
        </div>
        <div className='title-box'>
            <h1>This is the Title</h1>
            <p>This is the Description</p>
        </div>
        <div className='login-box'>
            <a href='#'><p className='nav-link'>Login</p></a>
            <a href='#'><p className='nav-link'>Signup</p></a>
        </div>
        </div>
        <div className='nav-body'></div>
      </div>
    )
  }
}


