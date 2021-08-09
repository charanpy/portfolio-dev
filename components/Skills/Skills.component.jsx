import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import HeadingComponent from '../Heading/Heading.component';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation.component';
import BackendComponent from '../svg/Skill/Backend.component';
import FrontendComponent from '../svg/Skill/Frontend.component';
import MobileComponent from '../svg/Skill/Mobile.component';
import { Skill, SkillContainer, SkillWrapper } from './Skill.style';

const SkillComponent = () => {
  const { theme } = useContext(ThemeContext);
  const color = theme ? '#64ffda' : '#4070F4';
  return (
    <ScrollAnimation>
      <SkillContainer>
        <HeadingComponent>What I do?</HeadingComponent>
        <SkillWrapper>
          <div>
            <FrontendComponent color={color} />
            <Skill>Frontend</Skill>
          </div>
          <div>
            <BackendComponent color={color} />
            <Skill>Backend</Skill>
          </div>
          <div>
            <MobileComponent color={color} />
            <Skill>Native Apps</Skill>
          </div>
        </SkillWrapper>
      </SkillContainer>
    </ScrollAnimation>
  );
};

export default SkillComponent;
