import './index.css'

const SkillItem = props => {
  const {SkillDetails} = props
  const {Skillname, imageUrl, content} = SkillDetails

  return (
    <div className="skillItem-container">
      <li className="skill-item">
        <img className="skill-image" src={imageUrl} alt={Skillname} />
        <div className="skill-details">
          <p className="skill-name">{Skillname}</p>
          <p className="skill-content">{content}</p>
        </div>
      </li>
    </div>
  )
}

export default SkillItem
