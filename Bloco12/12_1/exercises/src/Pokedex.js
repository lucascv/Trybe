import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      type: 'All'
    }
  }

  changePokemon = () => this.state.index === (pokemons.length - 1) ? this.setState({ index: 0})
  : this.setState({ index: this.state.index + 1});

  typeFilter = () => this.state.type === 'All' ? pokemons 
  : pokemons.filter((pokemon) => pokemon.type === this.state.type);

  changeType = (event) => this.setState({ type: event.target.value });

  render() {
    const lista = this.typeFilter();
    return (
      <section>
        <Pokemon
          name={lista[this.state.index].name}
          type={lista[this.state.index].type}
          image={lista[this.state.index].image}
          averageWeight={lista[this.state.index].averageWeight.value}
          measurementUnit={lista[this.state.index].averageWeight.measurementUnit}
        />
        <button onClick={this.changePokemon}>Next Pokémon</button>
        <div>
          <button value="Fire" onClick={this.changeType}>Fire</button>
          <button value="Psychic" onClick={this.changeType}>Psychic</button>
          <button value="All" onClick={this.changeType}>All</button>
        </div>
      </section>
    )
  }
}

export default Pokedex;
