import React, { Component } from "react";
import "./PokeDetail.css";

export class PokeDetail extends Component {
  render() {
    //LONG FUNC FOR BACKGROUND COLOR
    const backgroundClr = () => {
      switch (this.props.types) {
        case "electric":
          return "#f8d030";
        case "fire":
          return "#f08030";
        case "normal":
          return "#a8a878";
        case "fighting":
          return "#c03028";
        case "flying":
          return "#a890f0";
        case "poison":
          return "#a040a0";
        case "ground":
          return "#e0c068";
        case "rock":
          return "#b8a038";
        case "bug":
          return "#a8b820";
        case "ghost":
          return "#705898";
        case "steel":
          return "#b8b8d0";
        case "water":
          return "#6890f0";
        case "grass":
          return "#78c850";
        case "psychic":
          return "#f85888";
        case "ice":
          return "#98d8d8";
        case "dragon":
          return "#7038f8";
        case "dark":
          return "#705848";
        default:
          return "none";
      }
    };

    const borderControl = () => {
      if (this.props.types === "") {
        return "none";
      }
    };

    return (
      <div>
        <div className="cont">
          <img src={this.props.image} alt="" width="100px" height="100px" />
        </div>
        <div className="texts">
          <h2>
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
          </h2>
          <p>{this.props.classification}</p>
          <h3
            style={{
              border: borderControl(),
              backgroundColor: backgroundClr()
            }}
          >
            {this.props.types.toUpperCase()}
          </h3>

          <h4>{this.props.text}</h4>
        </div>
      </div>
    );
  }
}

export default PokeDetail;
