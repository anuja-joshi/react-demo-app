import React from 'react';
import ProjectCard from './ProjectCard';


const ProjectContainer = ({title, data}) => {
  return (
    <div>
      <h4 className="text-left"> {title}</h4>
      <br/>
      { data.map((project) => <ProjectCard project={project} key={project.id}/> )}
    </div>
  )
}

export default ProjectContainer;
