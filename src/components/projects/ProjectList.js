import React from "react";
import ProjectSummary from './ProjectSummary';

//desctructuring to grab projects from dashboard
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {/* add projects && in case there aren't projects yet */}
      { projects && projects.map(project => {
       return (
         <ProjectSummary project={project} key={project.id} />
       )
      })}
    </div>
  )
}

export default ProjectList