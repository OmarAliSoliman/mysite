import React from 'react'

function Project(props) {
  const {project} = props
  return (
    <div className="project-component mt-3 shadow" style={{border: `1px solid ${project.color}`}}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-capitalize" style={{color:`${project.color}`}}> <span role="img" aria-label="emoji-gym" style={{fontSize: '20px'}}>👉</span> {project.name} </h5>
          <h5 className="date text-capitalize"> {project.date} </h5>
          <h5 className="card-field text-capitalize" 
          style={{backgroundColor:`${project.color}`, border: `1px solid ${project.color}`}}> {project.field} </h5>
          <p className="card-descreption mt-2"> {project.descreption} </p>
          <p className="use"> {project.use} </p>
          <a href={project.githubLink}><i style={{color:`${project.color}`}} className="fab fa-github"></i></a>
          <a className="ml-2" href={project.directLink}><i style={{color:`${project.color}`}} className="fas fa-globe"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Project
