import React from 'react';

export default function Pet(props) {
  return (
    <div>
      <h3>{props.petName} - {props.petBreed}</h3>
    </div>
  );
}
