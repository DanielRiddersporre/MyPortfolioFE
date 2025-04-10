import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './shared/LandingPage'
import DanielLanding from './daniel/DanielLanding'
import DanielProjects from './daniel/DanielProjects'
import DanielBlog from './daniel/DanielBlog'
import DanielAbout from './daniel/DanielAbout'
import DanielContact from './daniel/DanielContact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Define routes for the application. For the LandingPage but also for the individual pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/lina" element={<LinaPage />} /> */} 
        {/* Routes specific for Linas page goes here */}
        
        <Route path="/daniel-landing" element={<DanielLanding />} />
        {/* Routes specific for Daniels page goes here */}
        <Route path="/daniel-projects" element={<DanielProjects />} />
        <Route path="/daniel-blog" element={<DanielBlog />} />
        <Route path="/daniel-about" element={<DanielAbout />} />
        <Route path="/daniel-contact" element={<DanielContact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
