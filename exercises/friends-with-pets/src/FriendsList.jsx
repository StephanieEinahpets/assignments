import React from 'react';
import Pet from './Pet';

export default function FriendsList(props) {
  const animals = props.pets.map(pet => (
    <Pet
      key={pet.id}
      petName={pet.name}
      petBreed={pet.breed}
    />
  ));

  return (
    <div className='friendslist'>
      <h2>{props.name}, {props.age}</h2>
      {animals}
      <hr></hr>
    </div>
  );
}


