import styled from 'styled-components';
import { flex, flexCenter } from '../../styles/common.style';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export const HeaderName = styled.h1`
  font-size: 2.6rem;
  font-weight: 500;
`;

export const NavContainer = styled.ul`
  ${flex};
  ${flexCenter}
`;

export const Link = styled.div`
  font-family: inherit;
  text-transform: capitalize;
  font-size: 1.67rem;
  margin-right: 3rem;
  font-weight: 500;
  color: rgb(119, 119, 121);
  cursor: pointer;
  transition: all 500ms linear;

  &:hover {
    color: ${(props) => props?.theme?.color};
  }
  /* font-family: 'Poppins', sans-serif; */
`;
