import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <section className={this.props.type}>
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
          <p>{this.props.averageWeight} {this.props.measurementUnit}</p>
        </div>
        <img src={this.props.image}/>
      </section>
    )
  }
}

export default Pokemon;
