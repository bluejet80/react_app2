import React, { Component } from "react";
import "./Arraymap.css";

export default class ArrayMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [
        {
          name: "Niklas Luhmann",
          book: "Social Systems",
          year: "1984",
        },
        {
          name: "Ralph Waldo Emerson",
          book: "Essays",
          year: "1841",
        },
        {
          name: "Henry David Throeau",
          book: "Walden",
          year: "1854",
        },
        {
          name: "Niklas Luhmann",
          book: "Differentiation of Society",
          year: "1975",
        },
        {
          name: "Percy Byshee Shelly",
          book: "Queen Mab: A Philosophical Poem",
          year: "1813",
        },
        {
          name: "Percy Byshee Shelly",
          book: "Queen Mab: A Philosophical Poem",
          year: "1813",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="array-container">
          {this.state.authors.map((item, index) => {
            return (
              <div className="array-segment" key={index}>
                <p>
                  <span className="label">Author: </span>
                  <span className="data">{item.name}</span>
                </p>
                <p>
                  <span className="label">Book: </span>
                  <span className="data">{item.book}</span>
                </p>
                <p>
                  <span className="label">Year: </span>
                  <span className="data">{item.year}</span>
                </p>
                <div className="divider2"></div>
              </div>
            );
          })}
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}
