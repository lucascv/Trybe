import React from 'react';

function StrictAccess (props) {
  const { username, password } = props;

  if (username === 'joao' && password === '1234') {
    return (
      <p>Welcome joao!</p>
    );
  }

  return (
    <p>Access denied</p>
  )
}

export default StrictAccess;
