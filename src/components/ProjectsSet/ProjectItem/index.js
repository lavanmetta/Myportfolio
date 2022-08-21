import './index.css'

const ProjectItem = props => {
  const {ProjectDetails} = props
  const {Projectname, ProjectimageUrl, content, linkOfProject} = ProjectDetails

  return (
    <div className="projectItem-container">
      <li className="project-item">
        <img
          className="project-image"
          src={ProjectimageUrl}
          alt={Projectname}
        />
        <div className="project-details">
          <p className="project-name">{Projectname}</p>
          <p className="project-content">{content}</p>
        </div>
      </li>
      <div className="link-container">
        <a className="link" href={linkOfProject}>
          Project Link
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
