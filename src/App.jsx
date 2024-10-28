import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Skill from './sections/Skill'
import Works from './sections/Works'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skill/>
      <Projects/>
      {/* <Works/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App