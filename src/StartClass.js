import { Component } from "react";

export default class StartClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "Jarett",
      herName: "Jessica",
      colorOne: "white",
      colorTwo: "white",
    };

    this.initalState = { ...this.state };
  }

  handleClickOne = () => {
    //update the state
    this.setState({
      myName: "Jarett Young",
      colorOne: "purple",
    });
  };

  handleClickTwo = () => {
    this.setState({
      herName: "Jessica Blank",
      colorTwo: "green",
    });
  };

  resetState = () => {
    this.setState(this.initalState);
  };

  render() {
    const { myName, herName, colorOne, colorTwo } = this.state;

    return (
      <div className="container">
        <div className="main">
          <div className="section-two">
            <h1 style={{ color: colorOne }}>Hello {myName}</h1>
            <button className="button-one" onClick={this.handleClickOne}>
              Change Name
            </button>
          </div>
          <div className="section-two">
            <h1 style={{ color: colorTwo }}>Hello {herName}</h1>
            <button className="button-one" onClick={this.handleClickTwo}>
              Change Name
            </button>
          </div>
          <div className="section-two">
            <button className="button-one" onClick={this.resetState}>
              Reset State
            </button>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}
