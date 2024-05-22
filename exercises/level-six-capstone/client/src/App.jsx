import './App.css'
import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Wish from './components/Wish'
import Shelf from './components/Shelf'
import { UserContext } from './context/UserProvider'
import ProtectedRoute from './ProtectedRoute'


function App() {

  const {token, logout} = useContext(UserContext)

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
          <button onClick={logout}>Log Out</button>
        </nav>
        <Routes>
          <Route path ="/" element={token ? <Navigate to="/shelf"/> : <Home />} />
          <Route path ="/wish" element={
            <ProtectedRoute token={token} redirectTo="/">
              <Wish />
            </ProtectedRoute>
            } />
          <Route path ="/shelf" element={
            <ProtectedRoute token={token} redirectTo="/">
              <Shelf />
          </ProtectedRoute>
        } />
        </Routes> 
      </Router>
    </div>
  )
}

export default App