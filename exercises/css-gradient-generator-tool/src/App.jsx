import { useState } from 'react'
import './App.css'

function App() {
  
  const [colors, setColors] = useState(['#FFFF00', '#F00000']);
  const [angle, setAngle] = useState(50);


  const handleColorChange = (index, value) => {
    const newColors = [...colors]
    newColors[index] = value
    setColors(newColors)
  }

    const gradientCode = `background: linear-gradient(${angle}deg, ${colors[0]}, ${colors[1]})\r\n-moz-background: linear-gradient(${angle}deg, ${colors[0]}, ${colors[1]})\r\n-webkit-background: linear-gradient(${angle}deg, ${colors[0]}, ${colors[1]})`;
 



  return (
    <>
      <h1>CSS Gradient Code Generator</h1>
      <div className='container'>
        <div className='colorbox'>
          <div className='preview' style={{background:`linear-gradient(${angle}deg, ${colors})`}}></div>
          <textarea 
          readOnly={true}
          value={gradientCode}
          />
        </div>
        <div className='inputbox'>
          <h2>Options</h2>
          {colors.map((color, index) => (
            <label className='colorinput' key={index}>
              <div>{`Color ${index + 1} `}</div>
              <div>{color}</div>
              <input type='color' value={color} onChange={(e) => handleColorChange(index, e.target.value)} />
            </label>
          ))}
          <label>
            Angle 
            <input type='number' className='angleinput'value={angle} onChange={(e) => setAngle(e.target.value)} />
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
