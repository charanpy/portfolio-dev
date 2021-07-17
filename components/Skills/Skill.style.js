import styled from 'styled-components';
import { flexCenter, flex } from '../../styles/common.style';

export const SkillContainer = styled.section`
  padding: 10rem 0 0 0;
`;

export const SkillWrapper = styled.div`
  ${flexCenter};
  ${flex};
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Skill = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 200;
  color: ${(props) => props.theme.light};
  margin-top: 1rem;
`;
