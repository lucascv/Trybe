import React from 'react';

function Users(props) {
  const { greetingMessage = 'Hi There' } = props;

  const numId = props.match.params.Id;

  if (numId) {
    return (
      <div>
      <h2> Users </h2>
      <p> {greetingMessage}, this is my awesome Users component </p>
      <p> {numId}</p>
    </div>
    );
  }

  return (
    <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
  </div>
  );
}

export default Users;
