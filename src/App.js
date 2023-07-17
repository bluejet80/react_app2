import "./App.css";
import { Component } from "react";
import StartClass from "./StartClass";
import Nav from "./Nav";
import TopSection from "./TopSection";
import ArrayMap from "./ArrayMap";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TopSection />
        <StartClass />
        <ArrayMap />
        <Footer />
      </div>
    );
  }
}
