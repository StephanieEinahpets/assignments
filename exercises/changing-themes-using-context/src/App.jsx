import { useState, useContext } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'
import Button from './Button'
import { ThemeContext } from './ThemeProvider'


function App() {

  const {color} = useContext(ThemeContext)

  return (
    <div className={color}>
      <Header />
      <Body />
      <Button />
    </div>
  )
}

export default App
