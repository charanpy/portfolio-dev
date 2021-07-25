import React from 'react';
import HeadingComponent from '../Heading/Heading.component';
import ButtonComponent from '../Button/Button.component';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation.component';
import { projects } from './helper';
import ProjectComponent from './Project.component';
import { ProjectButton } from './ProjectOverview.style';
import LinkComponent from '../Link/Link.component';
import { featuredProject } from '../../data/projects';
import ProjectContainerComponent from './ProjectContainer.component';

const ProjectOverviewComponent = () => {
  return (
    <section id='project-overview' className='pd'>
      <ScrollAnimation>
        <HeadingComponent>Projects</HeadingComponent>
        <ProjectContainerComponent projects={featuredProject} />
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
