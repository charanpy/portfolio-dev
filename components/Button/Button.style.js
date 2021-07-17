import styled from 'styled-components';
import { box } from '../../styles/common.style';

export const Button = styled.button`
  padding: 1.35rem 3.95rem;
  ${box};
  border-radius: 4px;
  line-height: 1;
  cursor: pointer;
  background: ${(props) =>
    props.theme.isDark ? 'transparent' : props.theme.secondary};
  margin-top: 2rem;
  font-family: inherit;
  font-size: 1.9rem;
  letter-spacing: 0.5px;
  font-weight: 200;

  transition: all 500ms linear;

  &:hover {
    background: ${(props) => props.theme.secondaryHover};
  }
`;
