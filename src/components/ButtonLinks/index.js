import {Component} from 'react'

import {HashLink as Link} from 'react-router-hash-link'

import './index.css'

class ButtonLinks extends Component {
  render() {
    return (
      <nav className="zone">
        <div className="button-container">
          <Link to="#home" smooth>
            <button
              className="I-button hover-underline-animation"
              type="button"
            >
              Home
            </button>
          </Link>
          <Link to="#aboutme" smooth>
            <button
              className="I-button hover-underline-animation"
              type="button"
            >
              About Me
            </button>
          </Link>
          <Link to="#skills" smooth>
            <button
              className="I-button hover-underline-animation"
              type="button"
            >
              Skills
            </button>
          </Link>
          <Link to="#projects" smooth>
            <button
              className="I-button hover-underline-animation"
              type="button"
            >
              Projects
            </button>
          </Link>
          <Link to="#contactme" smooth>
            <button
              className="I-button hover-underline-animation"
              type="button"
            >
              Contact Me
            </button>
          </Link>
        </div>
      </nav>
    )
  }
}

export default ButtonLinks
