import React from 'react';
import Pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return Pokemons.map(pok => (
      <Pokemon
      name={pok.name}
      type={pok.type}
      image={pok.image}
      averageWeight={pok.averageWeight.value}
      measurementUnit={pok.averageWeight.measurementUnit}
      />
    ))
  }
}

export default Pokedex;
