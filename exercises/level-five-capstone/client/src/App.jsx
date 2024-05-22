import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Wish from './components/Wish'
import Shelf from './components/Shelf'


function App() {

  return (
    <div>
      <Router> 
        <nav className="nav">
          <Link to="/" style={{ padding:5, textDecoration: 'none', color: 'inherit' }}>
          Home
          </Link>
          <Link to="/shelf" style={{ padding:5, textDecoration: 'none', color: 'inherit' }}>
          My Shelf
          </Link>
          <Link to="/wish" style={{ padding:5, textDecoration: 'none', color: 'inherit' }}>
          Wish List
          </Link>
        </nav>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/wish" element={<Wish />} />
          <Route path ="/shelf" element={<Shelf />} />
        </Routes> 
      </Router>
    </div>
  )
}

export default App