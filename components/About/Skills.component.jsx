import React from 'react';
import ListComponent from '../svg/List/List.component';
import { Skill, SkillName } from './About.style';

const SkillsComponent = ({ skill }) => {
  return (
    <Skill>
      <ListComponent small />
      <SkillName>{skill}</SkillName>
    </Skill>
  );
};

export default SkillsComponent;
