import React from 'react';
import { AboutText, SkillName } from '../About/About.style';
import SkillContainerComponent from '../About/SkillContainer.component';
import HeadingComponent from '../Heading/Heading.component';
import ProjectContainerComponent from '../ProjectOverview/ProjectContainer.component';
import { Wrapper } from './ProjectDetail.style';

const ProjectDetailComponent = ({ project }) => {
  const { title, description, technology, features } = project;
  console.log(project, 89);
  return (
    <>
      <HeadingComponent>{title && title}</HeadingComponent>
      <ProjectContainerComponent projects={[project]} about={false} />
      <Wrapper>
        <HeadingComponent mb>Description</HeadingComponent>
        <SkillName>{description && description}.</SkillName>
      </Wrapper>
      <Wrapper>
        <HeadingComponent mb>Technologies</HeadingComponent>
        <AboutText>
          <SkillContainerComponent
            technology={technology && technology.split(' ')}
          />
        </AboutText>
      </Wrapper>
      <Wrapper>
        <HeadingComponent mb>Feautures</HeadingComponent>
        <AboutText>
          <SkillContainerComponent technology={features && features} />
        </AboutText>
      </Wrapper>
    </>
  );
};

export default ProjectDetailComponent;
