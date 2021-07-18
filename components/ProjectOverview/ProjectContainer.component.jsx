import React from 'react';
import ProjectComponent from './Project.component';
import { ProjectContainer } from './ProjectOverview.style';

const ProjectContainerComponent = ({ projects }) => {
  return (
    <ProjectContainer>
      {projects.map(({ image, title, website, github, description, key }) => (
        <ProjectComponent
          key={key}
          src={image}
          alt={title}
          link={website}
          github={github}
          description={description}
          navigate={key}
        />
      ))}
    </ProjectContainer>
  );
};

export default ProjectContainerComponent;
