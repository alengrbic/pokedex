import React, { Component } from "react";
import "./PokeDetail.css";

export class PokeDetail extends Component {
  render() {
    return (
      <div>
        <div className="cont">
          <img src={this.props.image} alt="" width="200px" height="200px" />
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
