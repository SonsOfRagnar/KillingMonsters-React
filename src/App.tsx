import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './variables.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import BestiaryPage from './pages/bestiary'
import HomePage from './pages/home'
import NotFoundPage from './pages/not-found'
import StoryPage from './pages/story';
import RulesPage from './pages/rules';
import AboutPage from './pages/about';


// basename="/KillingMonsters-React"

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/bestiary" element={<BestiaryPage/>}/>
        <Route path="/story" element={<StoryPage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
