import React from 'react';
import HeadingComponent from '../Heading/Heading.component';
import ButtonComponent from '../Button/Button.component';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation.component';
import { projects } from './helper';
import ProjectComponent from './Project.component';
import { ProjectButton, ProjectContainer } from './ProjectOverview.style';
import LinkComponent from '../Link/Link.component';

const ProjectOverviewComponent = () => {
  return (
    <section id='project-overview' className='pd'>
      <ScrollAnimation>
        <HeadingComponent>Projects</HeadingComponent>
        <ProjectContainer>
          {projects.map(({ src, alt, link, github }) => (
            <ProjectComponent
              key={src}
              src={src}
              alt={alt}
              link={link}
              github={github}
            />
          ))}
        </ProjectContainer>
        <LinkComponent path='/projects'>
          <ProjectButton>
            <ButtonComponent>More Projects</ButtonComponent>
          </ProjectButton>
        </LinkComponent>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectOverviewComponent;
