import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/nav'

function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App