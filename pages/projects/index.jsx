import React from 'react';
import HeadingComponent from '../../components/Heading/Heading.component';
import ProjectComponent from '../../components/Project/Project.component';
import Container from '../../layout/Container/Container.component';
import Seo from '../../layout/Seo/Seo';

const Projects = () => {
  return (
    <>
      <Seo
        title='Projects'
        ogTitle='Full stack(MERN) and React Native Projects'
        description='React,Angular,React native,nodejs projects(Insta,whatsapp clone,e commerce app)'
        ogImage='https://static.wixstatic.com/media/1f823f_e88f1324756c428b86099d910342ef97~mv2.png'
      />
      <Container>
        <HeadingComponent>Projects</HeadingComponent>
        <ProjectComponent />
      </Container>
    </>
  );
};

export default Projects;
