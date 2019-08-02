/* Unused React Component */

import React, { Component } from "react";
import Pokedex from "pokedex-promise-v2";
import "./PokeList.css";
const P = new Pokedex();

export class PokeList extends Component {
  constructor() {
    super();
    this.handleList = this.handleList.bind(this);
  }

  state = {
    pokemon: [],
    images: []
  };

  async handleList() {
    let images = [];
    for (let i = 1; i < 152; i++) {
      images.push(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
      );
    }
    console.log(images);
    this.setState({ images: images });
    const response = await P.getPokedexByName("kanto");
    console.log(response);
    this.setState({
      pokemon: response.pokemon_entries.map(e => {
        return e.pokemon_species.name;
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.images.map(ev => {
          return <img src={ev} alt="" width="100px" height="100xp" />;
        })}

        <button onClick={this.handleList}>Click me</button>
      </div>
    );
  }
}

export default PokeList;
