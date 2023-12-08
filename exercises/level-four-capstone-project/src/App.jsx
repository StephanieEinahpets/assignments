import { useState, useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Recommend from './components/Recommend'
import { Context } from './Context/ContextProvider'



function App() {

  const {toggleTheme, theme} = useContext(Context)

  return (
    <div className={theme ? "darkMode" : "lightMode"}>
      <Router>
        <nav className="nav">
          <Link to="/" style={{ padding:5, textDecoration: 'none', color: 'inherit' }}>
          Home
          </Link>
          <Link to="/about" style={{ padding:5, textDecoration: 'none', color: 'inherit' }}>
          Search
          </Link>
          <Link to="/recommend" style={{ padding:5, textDecoration: 'none', color: 'inherit' }}>
          Recommendations
          </Link>
        </nav>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/recommend" element={<Recommend />} />
          <Route path ="/about" element={<About />} />
        </Routes> 
        <button onClick={toggleTheme}>Change Theme</button>
      </Router>
    </div>
  )
}

export default App

