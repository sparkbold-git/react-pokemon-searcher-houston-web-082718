import React from "react";
import { Card } from "semantic-ui-react";
import _ from "lodash";
// This component is presenting detail info of the pokemon
class PokemonCard extends React.Component {
  state = { isClick: false };

  handleClick = () => {
    this.setState(state => {
      return { isClick: !state.isClick }; // safe asigning state
    });
  };
  render() {
    const { pokemon } = this.props;

    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            {this.state.isClick ? (
              <img src={pokemon.sprites.back} alt="back" />
            ) : (
              <img src={pokemon.sprites.front} alt="front" />
            )}
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {_.find(pokemon.stats, ["name", "hp"]).value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
