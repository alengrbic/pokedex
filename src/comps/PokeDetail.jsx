import React, { Component } from "react";
import "./PokeDetail.css";

export class PokeDetail extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "white",
            minHeight: "23vh",
            border: "1px solid red",
            borderRadius: "15px",
            marginBottom: "1rem"
          }}
        >
          <img src={this.props.image} alt="" width="px" height="200px" />
        </div>
        <div className="texts">
          <h2>
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
          </h2>
          <h3>{this.props.types.toUpperCase()}</h3>

          <h4>{this.props.text}</h4>
        </div>
      </div>
    );
  }
}

export default PokeDetail;
