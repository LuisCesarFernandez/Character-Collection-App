import { MainPage } from './pages/mainPage'
import { FormPage } from './pages/formPage'
import { HeaderComponent } from './components/headerComponent'
import { Routes ,Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route element={<MainPage />} path='/' />
        <Route element={<FormPage />} path='/formulario'/>
      </Routes>
    </Router>
  )
}

export default App
