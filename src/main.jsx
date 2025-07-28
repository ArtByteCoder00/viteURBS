import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import Onibus from './onibus.jsx'
import Recarga from './recarga.jsx'
import Historico from './historico.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/onibus' element={<Onibus />} />
        <Route path='/recarga' element={<Recarga />} />
        <Route path='/historico' element={<Historico />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
