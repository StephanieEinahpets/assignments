import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {

  const [namesList, setNamesList] = useState([])
  const [inputValue, setInputValue] = useState('')

  function handleChange(event) {
    setInputValue(event.target.value)
}

  function addName () {
    setNamesList([...namesList, inputValue]);
    setInputValue('');
  }

  return (
    <>
      <input 
        type='text'
        placeholder='Enter Name'
        onChange={handleChange}
      />
      <button onClick={addName}>Add Name</button>
      <h1>{inputValue}</h1>
      <ol>
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </>
  )
}

export default App
