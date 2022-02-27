import './App.css'
import { initInternationalization } from './i18next'
import MyRoutes from './routes'



function App() {

  initInternationalization('fr')

  return (
    <div className='App'>
        <MyRoutes />
    </div>
  )
}

export default App
