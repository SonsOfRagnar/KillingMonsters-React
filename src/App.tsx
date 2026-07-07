import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Bestiary from './pages/bestiary'
import Home from './pages/home'
import NotFound from './pages/not-found'

function App() {
  return (
    <Router basename="/KillingMonsters-React/">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bestiary" element={<Bestiary/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
