import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { flex, flexCenter, flexColumn } from '../../styles/common.style';

export const IntroContainer = styled.section`
  ${flex};
  min-height: 90vh;
  @media (max-width: 790px) {
    line-height: 1.5;
    margin-bottom: 10rem;
    min-height: fit-content;
  }
`;

export const IntroWrapper = styled(motion.div)`
  ${flexColumn};
  ${flexCenter};
  flex-wrap: wrap;
  padding-top: 8rem;
  /* opacity: 0; */
  align-items: flex-start;
  /* margin-left: -50%; */
`;

export const sharedColor = css`
  color: ${(props) => props.theme.secondary};
`;
export const Field = styled.h3`
  ${sharedColor};
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 1rem;
  @media (max-width: 790px) {
    margin-left: 0rem;
  }
`;

export const Highlight = styled.span`
  ${sharedColor};
`;

export const SharedText = css`
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 400;
`;

export const FieldText = styled.h1`
  ${SharedText};
  ${flex};
  color: ${(props) =>
    props.theme.isDark ? props.theme.textLight : props.theme.light};
`;

export const FieldTextColor = styled.h1`
  ${SharedText};
  color: ${(props) => props.theme.light};
  @media (max-width: 790px) {
    font-size: 3rem;
  }
`;

export const AboutMe = styled.h1`
  font-size: 1.9rem;
  font-weight: 500;
  margin-top: 1.5rem;
  color: ${(props) => props.theme.lighter};
  margin: 10px 0px 0px 0.2rem;
  max-width: 540px;
  line-height: 1.7;
  word-break: break-all;
  word-spacing: 2px;
  @media (max-width: 790px) {
    word-break: break-word;
    line-height: 1.9;
  }
`;

export const CoverWrapper = styled.div`
  ${flex};
  ${flexCenter};
`;

export const AnimationContainer = styled(motion.div)`
  /* opacity: 0; */
`;
