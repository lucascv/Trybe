import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <section className="pokemon">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} />
        <p>{this.props.type}</p>
        <p>{this.props.averageWeight} {this.props.measurementUnit}</p>
      </section>
    )
  }
}

export default Pokemon;
