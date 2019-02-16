import React from "react";
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

//desctructuring to grab projects from dashboard
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {/* add projects && -- start with that in case there aren't projects yet */}
      { projects && projects.map(project => {
       return (
         <Link to={'/project/' + project.id}>
         <ProjectSummary project={project} key={project.id} />
         </Link>
       )
      })}
    </div>
  )
}

export default ProjectList