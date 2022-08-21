import {BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/ProjectsSet/Projects'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </BrowserRouter>
  </div>
)
export default App
