import React, { Component } from "react";
import Pokedex from "pokedex-promise-v2";
import PokeDetail from "./PokeDetail";
import "./App.css";
const P = new Pokedex();

export class App extends Component {
  constructor() {
    super();
    this.handlePokedex = this.handlePokedex.bind(this);
  }
  state = {
    name: "",
    url: "",
    term: "",
    text: "",
    type: "",
    classification: ""
  };

  async handlePokedex() {
    const response = await P.getPokemonByName(this.state.term.toLowerCase());
    const response2 = await P.getPokemonSpeciesByName(
      this.state.term.toLowerCase()
    );
    console.log(response);
    console.log(response2);
    if (this.state.term !== "") {
      this.setState({ name: response.name });
      this.setState({ url: response.sprites.front_default });
      this.setState({
        text: response2.flavor_text_entries[2].flavor_text,
        classification: response2.genera[2].genus
      });
      this.setState({ type: response.types[0].type.name });
    } else {
      alert("Please enter a valid Pokemon name");
    }
  }

  keypressed = event => {
    if (event.key === "Enter") {
      this.handlePokedex();
    }
  };

  render() {
    return (
      <div className="main">
        <div className="containers" style={this.styles}>
          <PokeDetail
            name={this.state.name}
            image={this.state.url}
            text={this.state.text}
            types={this.state.type}
            classification={this.state.classification}
          />

          <input
            type="text"
            placeholder="Enter Pokemon name.."
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
            onKeyPress={this.keypressed}
          />
          <button className="btn" onClick={this.handlePokedex} />
        </div>
      </div>
    );
  }
}

export default App;
