import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import QuizHomePage from './pages/QuizHomePage'
import NavBar from './components/Navbar'


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<QuizHomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
