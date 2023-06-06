import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Specialists from './pages/Specialists/Specialists'
import Exercices from './pages/Exercices/Exercices'

import './App.css'

function App() {

  return (
    <div>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/exercices" element={<Exercices />} />
    </Routes>
    </div>
  )
}

export default App
