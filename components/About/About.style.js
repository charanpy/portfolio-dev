import styled from 'styled-components';
import { flex, flexCenter, flexColumn } from '../../styles/common.style';

export const AboutContainer = styled.div`
  padding: 10rem 0;
`;

export const AboutWrapper = styled.div`
  ${flex};
  justify-content: space-evenly;

  @media (max-width: 790px) {
    ${flexColumn};
    ${flexCenter};
  }
`;

export const AboutText = styled.div`
  font-size: 1.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.slate};
  line-height: 1.8;
  word-wrap: break-word;
`;

export const ContentWrapper = styled.div`
  width: 40%;
  ${flexColumn};
  ${flexCenter};
  @media (max-width: 790px) {
    width: 100%;
  }
`;

export const SkillsContainer = styled.div`
  ${flex};
  ${flexCenter};
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const Skill = styled.div`
  ${flex};
  font-weight: 200;
  width: 30%;
  justify-content: flex-start;
  @media (max-width: 790px) {
    width: 50%;
  }
`;
export const SkillName = styled.p`
  font-size: 1.9rem;
  font-weight: 200;
  color: ${(props) => props.theme.light};
  display: flex;
  align-self: center;
  margin-left: 0.5rem;
  position: relative;
  margin-bottom: 0.8rem;
`;

export const ImageContainer = styled.figure`
  width: 350px;
  height: 250px;
  position: relative;
  margin-top: 5rem;
  @media (max-width: 790px) {
    display: none;
  }
`;
