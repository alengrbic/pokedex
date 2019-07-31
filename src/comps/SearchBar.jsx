import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={e => {
            this.setState({ term: e.target.value });
          }}
        />
        <button onClick={this.handlePokedex}>Test for Pokedex</button>
      </div>
    );
  }
}

export default SearchBar;
