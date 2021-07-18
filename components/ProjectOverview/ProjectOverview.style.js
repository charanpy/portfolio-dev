import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { flex, flexCenter, flexColumn } from '../../styles/common.style';

export const ProjectContainer = styled.div`
  ${flex};
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 790px) {
    ${flexColumn};
    ${flexCenter};
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: 40%;
  margin: auto;
  display: inline-block;
  margin-bottom: 8rem;
  box-shadow: ${() => `6rem 7rem 3.2rem -2rem transparent`};
  border-radius: 5px;
  @media (max-width: 790px) {
    width: 80%;
  }
`;

const shake = keyframes`
0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0%;
  width: 100%;
  text-align: center;
  cursor: pointer;
  z-index: 1;
`;

export const Button = styled(motion.button)`
  padding: 1rem;
  text-align: center;
  background: #000;
  color: white;
  outline: none;
  border: none;
  font-family: inherit;
  width: 15rem;
  border-radius: 50px;
  border: ${(props) => `1px solid ${props.theme.secondary}`};
  text-transform: uppercase;
  font-size: 1.4rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
  animation: ${shake} 2s ease-in-out 0s infinite;
`;

export const ProjectName = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'Josefin Sans', sans-serif;
  color: ${(props) => props.theme.secondary};
`;

export const ProjectDetails = styled.figcaption`
  position: absolute;
  bottom: -10%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectButton = styled.div`
  ${flex};
  ${flexCenter};
`;

export const ProjectImage = styled(Image)`
  opacity: ${(props) => (props.theme.isDark ? 0.7 : 1)};
`;
