import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const POKE_API_URL = "http://localhost:3000/pokemon";

//This is container component holding logic for all the components

class PokemonPage extends React.Component {
  state = {
    pokemons: [], // store pokemons data to state
    term: "",
    loaded: false
  };

  // fetch pokemons data from api
  componentDidMount() {
    fetch(POKE_API_URL)
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons }))
      .catch(e => console.log("error: ", e));
  }

  handleSearchChange = (e, { value }) =>
    this.setState(
      { term: value.toLowerCase() },
      console.log("===", this.state.term.toLowerCase())
    );

  addPokemon = newPokemon => {
    console.log("===> addPokemonFired");
    const data = {
      name: newPokemon.name.toLowerCase(),
      stats: [{ name: "hp", value: newPokemon.hp }],
      sprites: { front: newPokemon.frontUrl, back: newPokemon.backUrl }
    };

    this.setState({
      pokemons: [...this.state.pokemons, data]
    });

    fetch(POKE_API_URL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json());
  };
  render() {
    let filteredPokemons =
      this.state.term === ""
        ? [...this.state.pokemons]
        : this.state.pokemons.filter(poke =>
            poke.name.includes(this.state.term)
          );
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
        <br />
        <PokemonForm submitForm={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
