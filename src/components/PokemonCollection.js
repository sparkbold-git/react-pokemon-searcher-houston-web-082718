import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

// this component is holding/render all the cards
class PokemonCollection extends React.Component {
  render() {
    console.log("===pokeCollection>", this.props);
    const { pokemons } = this.props;
    return (
      <Card.Group itemsPerRow={6}>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
