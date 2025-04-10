import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './shared/LandingPage'
import DanielPage from './daniel/DanielPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Define routes for the application. For the LandingPage but also for the individual pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/lina" element={<LinaPage />} /> */} 
        {/* Routes specific for Linas page goes here */}
        <Route path="/daniel" element={<DanielPage />} />
        {/* Routes specific for Daniels page goes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
