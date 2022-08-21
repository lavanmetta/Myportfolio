import TextIntro from '../TextIntro'
import './index.css'

const Video = () => (
  <div className="scroll">
    <section className="outter option1">
      <section className="video-container">
        <video
          src="https://res.cloudinary.com/dxm2oqlbo/video/upload/v1660239211/Pexels_Videos_1851190_op9ddz.mp4"
          autoPlay
          loop
          className="video"
          muted
        />
        <div className="callout">
          <h1 className="intro">Hi, I am Lavan Metta</h1>
          <TextIntro />
        </div>
      </section>
    </section>
  </div>
)

export default Video
