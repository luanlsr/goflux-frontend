import React from 'react'
import Router from './components/Router';
import NavBar from './components/NavBar';
import Login from './pages/Login';

export default function App() {
  const user = 'null'

  if (user === null) {
    return (
      <div>
        <Login/>
      </div>
    )
  }
  
  return (
    <div>
      <NavBar/>
      <Router />
    </div>
  )
}

