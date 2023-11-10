import { useState } from 'react'
import Square from './Square'

 
export default function GridOfSquares() {

    const [colors, setColors] = useState(['white', 'white', 'white', 'white'])
    const box = colors.map((color, index) => (<Square key={index} color={color} />))

    function djsmall() {
        const updatedColors = colors[0] === 'white' ? ['black', 'black', 'black', 'black'] : ['white', 'white', 'white', 'white']
        setColors(updatedColors)
      }

      function djparty() {
        const updatedColors = colors.map((color, index) => index < colors.length / 2 ? 'purple' : color)
        setColors(updatedColors)
      }

      function leftblue() {
        const updatedColors = [...colors];
        updatedColors[2] = 'blue'
        setColors(updatedColors)
      }

      function rightblue() {
        const updatedColors = [...colors];
        updatedColors[3] = 'blue'
        setColors(updatedColors)
      }

      function djBigTimeOne() {
        const updatedColors = [...colors];
        updatedColors[0] = 'fuchsia'
        setColors(updatedColors)
      }

      function djBigTimeTwo() {
        const updatedColors = [...colors];
        updatedColors[1] = 'orange'
        setColors(updatedColors)
      }

      function djBigTimeThree() {
        const updatedColors = [...colors];
        updatedColors[2] = 'yellow'
        setColors(updatedColors)
      }

      function djBigTimeFour() {
        const updatedColors = [...colors];
        updatedColors[3] = 'chartreuse'
        setColors(updatedColors)
      }

    return (
        <div className='container'>
            {box}
            <button onClick={djsmall}>DJ SMALL</button>
            <button onClick={djparty}>DJ PARTY</button>
            <button onClick={leftblue}>Bottom Left Blue</button>
            <button onClick={rightblue}>Bottom Right Blue</button>
            <button onClick={djBigTimeOne}>DJ Big Time One</button>
            <button onClick={djBigTimeTwo}>DJ Big Time Two</button>
            <button onClick={djBigTimeThree}>DJ Big Time Three</button>
            <button onClick={djBigTimeFour}>DJ Big Time Four</button>
        </div>
    )
}