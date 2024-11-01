import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'
import Footer from './sections/Footer'
import ContactView from './pages/ContactView'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/projects/:projectId" element={<ProjectView />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App