import React from 'react';
import { SkillsContainer } from './About.style';
import SkillsComponent from './Skills.component';

const SkillContainerComponent = ({ technology }) => {
  return (
    <SkillsContainer>
      {technology.map((data) => (
        <SkillsComponent key={data} skill={data} />
      ))}
    </SkillsContainer>
  );
};

export default SkillContainerComponent;
