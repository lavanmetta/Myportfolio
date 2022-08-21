import {Component} from 'react'

import './index.css'

class AboutMe extends Component {
  render() {
    return (
      <div className="shadow">
        <a
          href="https://drive.google.com/file/d/1iPrdMA44QBCIjHf4JiI3IRFO_sAQGLNS/view"
          download
        >
          <button
            className="CV-button hove-underline-animation cv-button "
            type="button"
          >
            Download CV
          </button>
        </a>
        <div id="aboutme">
          <h1 className="about-me">About me</h1>
        </div>
        <div className="about-container">
          <div className="fade-in">
            <p className="about-me-para">
              Hello ! My name is Lavan I Completed my post-graduation in 2021 I
              am Fresher currently looking for a job. My interest in web
              development, i enjoy creating things that live on the internet.
              People find me to be an upbeat, self-motivated team player with
              good communication skills. I am a dedicated person with a family
              of four. I trained as a full-stack developer in CCBP. i learned
              technologies like
              <span className="technologies">
                {' '}
                HTML CSS JAVASCRIPT REACT JS & PYTHON SQLITE NODE JS EXPRESS JS{' '}
              </span>{' '}
              and i also worked in different projects and i build different
              types of websites using{' '}
              <span className="projects">
                STATIC, RESPONSIVE AND DYNAMIC-WEB DEVELOPMENT
              </span>
            </p>
          </div>
          <div className="pic fade-out">
            <img
              alt="profile-pic"
              className="profile-pic"
              src="https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659889325/IMG20210731072829-01_1_llohf9.jpg"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
