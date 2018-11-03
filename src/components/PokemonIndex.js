import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const POKE_API_URL = "http://localhost:3000/pokemon";

//This is container component holding logic for all the components

class PokemonPage extends React.Component {
  state = {
    pokemons: [] // store pokemons data to state
  };

  // fetch pokemons data from api
  componentDidMount() {
    fetch(POKE_API_URL)
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons }));
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(() => console.log("search fired"), 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
        <br />
        <PokemonForm />
      </div>
    );
  }
}

export default PokemonPage;
