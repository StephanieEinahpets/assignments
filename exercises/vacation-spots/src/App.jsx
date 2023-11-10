import { useState } from 'react'
import './App.css'
import data from './data'
import Card from './Card'

function App() {

  const vacationSpots = data.map(spots => {
    return (
        <Card 
        place={spots.place}
        price={spots.price}
        season={spots.season}
        />
    )
    })

  return (
    <div>
      <div className='coverimg'></div>
      <h1 className='header'>Vacation Spots</h1>
      <section className='container'>
        {vacationSpots}
      </section>
    </div>
  )
}

export default App
