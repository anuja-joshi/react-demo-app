import React from 'react';
import ProjectCard from './ProjectCard';

import { MdFavorite, MdTrendingUp } from 'react-icons/md';


const ProjectContainer = ({title, data, context}) => {
  return (
    <div>
      <h4 className="text-left">
        {context === 'like' ? <MdFavorite/> : <MdTrendingUp/> }
        {title}
      </h4>
      <br/>
      { data.map((project) => <ProjectCard project={project} key={project.id}/> )}
    </div>
  )
}

export default ProjectContainer;
