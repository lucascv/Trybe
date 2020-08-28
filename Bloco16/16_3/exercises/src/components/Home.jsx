import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <Link to="/login">Link navegação</Link>
      </div>
    );
  }
} 

export default Home;
