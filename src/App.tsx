import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './shared/LandingPage'
import LinaPage from './lina/LinaPage'
import DanielPage from './daniel/DanielPage'

function App() {
  return (
    <>
      {/* Define routes for the application. For the LandingPage but also for the individual pages */}
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/lina" element={<LinaPage />} />
              {/* Routes specific for Linas page goes here */}
            <Route path="/daniel" element={<DanielPage />} />
              {/* Routes specific for Daniels page goes here */}
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

export default App
