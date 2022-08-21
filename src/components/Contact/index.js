import {useState} from 'react'

import {
  FaInstagram,
  FaGithubSquare,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  })

  const postData = async e => {
    e.preventDefault()
    const {name, email, number, message} = data

    // eslint-disable-next-line no-unused-vars
    const res = await fetch(
      'https://portfolio-9fae2-default-rtdb.firebaseio.com/portfolio.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          number,
          message,
        }),
      },
      // eslint-disable-next-line
    ).then(() => alert('submitted Successfully'))
  }

  return (
    <div id="contactme">
      <div className="contact-container">
        <div className="submit-container">
          <h1 className="contact-heading">Contact me </h1>
          <form>
            <p className="input-heading">Name :</p>
            <input
              type="text"
              className="input"
              onChange={e => setData({...data, name: e.target.value})}
            />

            <p className="input-heading">Gmail :</p>
            <input
              type="email"
              className="input"
              onChange={e => setData({...data, email: e.target.value})}
            />

            <p className="input-heading">Contact No :</p>
            <input
              id="name"
              type="text"
              className="input"
              onChange={e => setData({...data, number: e.target.value})}
            />

            <p className="input-heading">Message :</p>
            <textarea
              col="100"
              row="20"
              className="textarea"
              onChange={e => setData({...data, message: e.target.value})}
            />
            <button type="button" className="submit-button" onClick={postData}>
              Submit
            </button>
          </form>
        </div>
        <div>
          <img
            alt="img"
            className="img"
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=826&t=st=1660484296~exp=1660484896~hmac=a953e31247a002e853ea9d99ebdde6f7728d35da755d8f71064036a3b5578526"
          />
        </div>
      </div>
      <center>
        <div className="logo-container">
          <div className="logo-image">
            <a
              href=" 
https://www.instagram.com/invites/contact/?i=19230fcleia6t&utm_content=29f3r76"
            >
              <FaInstagram className="social-logo" />
            </a>
          </div>
          <div className="logo-image">
            <a
              href=" 
https://github.com/lavanmetta"
            >
              <FaGithubSquare className="social-logo" />
            </a>
          </div>
          <div className="logo-image">
            <a href="mailto:lavanmetta111@gmail.com">
              <FaGoogle className="social-logo" />
            </a>
          </div>
          <div className="logo-image">
            <a
              href=" 
                    https://www.linkedin.com/in/lavanmetta/"
            >
              <FaLinkedinIn className="social-logo" />
            </a>
          </div>
          <div className="logo-image">
            <a href=" https://twitter.com/lavanmetta?t=-xxlMjl13zdXX2Kw8tCfNQ&s=09">
              <FaTwitter className="social-logo" />
            </a>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Contact
