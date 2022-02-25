import { useState } from 'react'
import HomePage from './pages/home-page/HomePage'
import './App.css'
import { initInternationalization } from './i18next'

function App() {

  initInternationalization('fr')

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
