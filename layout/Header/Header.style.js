import { motion } from 'framer-motion';
import styled from 'styled-components';
import { flex, flexCenter } from '../../styles/common.style';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 0 5rem;
  z-index: 4;
  background-color: ${(props) =>
    props.theme.isDark ? 'rgba(10, 25, 47, 0.85)' : 'rgba(255,255,255,0.9)'};
  backdrop-filter: blur(10px);
  @media (max-width: 790px) {
    padding: 0 2.5rem;
  }
`;

export const HeaderNameContainer = styled.div`
  ${flex};
  position: relative;
`;
export const HeaderName = styled.h1`
  font-size: 2.6rem;
  font-weight: 500;
`;

export const NavContainer = styled.ul`
  ${flex};
  ${flexCenter}
  @media (max-width:790px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-family: inherit;
  text-transform: capitalize;
  font-size: 1.67rem;
  margin-right: 3rem;
  font-weight: 300;
  color: ${(props) =>
    props.active ? props.theme.secondary : props.theme.light};
  cursor: pointer;
  transition: all 500ms linear;

  &:hover {
    color: ${(props) => props?.theme?.green};
  }
`;

export const MobileNavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0%;
  min-height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.nav};
  @media (min-width: 800px) {
    display: none;
  }
`;

export const MobileNavWrapper = styled.ul`
  position: absolute;
  top: 30%;
  left: 40%;
  bottom: 40%;
  margin-bottom: 1rem;
`;

export const MenuContainer = styled.div`
  z-index: 100000;
  display: none;
  @media (max-width: 790px) {
    display: flex;
  }
`;

export const NavList = styled(motion.li)`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  @media (max-width: 790px) {
    margin: 0 0 3rem 0;
    /* text-align: center; */
  }
`;
