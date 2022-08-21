import {Component} from 'react'

// import Skills from '../Skills'
// import Projects from '../Projects'
// import Contact from '../Contact'
// import AboutMe from '../AboutMe'
import Video from '../Video'
import ButtonLinks from '../ButtonLinks'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="scroll" id="home">
        <ButtonLinks />
        <Video />
      </div>
    )
  }
}
export default Home
