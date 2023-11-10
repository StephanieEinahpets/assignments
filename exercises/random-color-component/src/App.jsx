import React, { useState } from 'react'
import './App.css'

function App() {

const [colors, setColors] = useState()

  async function getRandomColor() {
    const res = await fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    const data = await res.json()
    setColors(data.colors[0].hex)
  }

  React.useEffect(() => {
    getRandomColor()
  }, [])


  return (
    <>
      <button onClick={() => getRandomColor()} style={{backgroundColor: `#${colors}`}}>Change Color</button>
    </>
  )
}

export default App
