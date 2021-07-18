import styled from 'styled-components';
import { flex } from '../../styles/common.style';

export const Category = styled.button`
  padding: 0.3rem;
  min-width: 10rem;
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  outline: none;
  border: ${(props) => `1px solid ${props.theme.secondary}`};
  background: ${(props) =>
    props.current ? props.theme.secondaryHover : 'transparent'};
  border-radius: 4px;
  color: inherit;
  margin: 2rem 2rem 0 0;
  text-transform: capitalize;
  font-family: inherit;
  font-weight: 400;
  color: ${(props) =>
    props.current
      ? props.theme.isDark
        ? props.theme.color
        : '#fff'
      : props.theme.color};

  &:hover {
    background: ${(props) => `${props.theme.secondaryHover}`};
    color: ${(props) => (props.theme.isDark ? 'inherit' : 'white')};
  }
`;

export const CategoryContainer = styled.div`
  ${flex};
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;
