import HomePage from './pages/home-page/HomePage'
import './App.css'
import { initInternationalization } from './i18next'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  initInternationalization('fr')

  return (
    <div className='App'>
      <Router>
        <Routes>
          Route: <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
