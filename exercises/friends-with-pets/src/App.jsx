import React from 'react';
import './App.css';
import FriendsList from './FriendsList';
import data from './data';

function App() {
  const friends = data.map(person => (
    <FriendsList
      key={person.id} 
      name={person.name}
      age={person.age}
      pets={person.pets} 
    />
  ));

  return (
    <div>
      <h1>Friends With Pets</h1>
      <hr></hr>
      {friends}
    </div>
  );
}

export default App;

