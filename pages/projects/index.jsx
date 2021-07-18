import React from 'react';
import HeadingComponent from '../../components/Heading/Heading.component';
import ProjectComponent from '../../components/Project/Project.component';
import Container from '../../layout/Container/Container.component';

const Projects = () => {
  return (
    <Container>
      <HeadingComponent>Projects</HeadingComponent>
      <ProjectComponent />
    </Container>
  );
};

export default Projects;
