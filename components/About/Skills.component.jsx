import React from 'react';
import ListComponent from '../svg/List/List.component';
import { Skill, SkillName, SkillsContainer } from './About.style';
import { skills } from './helper';

const SkillsComponent = () => {
  return (
    <SkillsContainer>
      {skills.map((skill) => (
        <Skill key={skill}>
          <ListComponent small />
          <SkillName>{skill}</SkillName>
        </Skill>
      ))}
    </SkillsContainer>
  );
};

export default SkillsComponent;
