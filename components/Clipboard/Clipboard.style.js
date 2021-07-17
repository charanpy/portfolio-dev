import styled from 'styled-components';
import { box, flex } from '../../styles/common.style';

export const AlertContainer = styled.div`
  position: absolute;
  right: 1%;
  bottom: 5%;
  ${box};
  padding: 1.2rem;
  ${flex};
  min-width: fit-content;
  border-radius: 5px;
  &:hover {
    background: ${(props) => props.theme.secondaryHover};
  }
`;

export const Message = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0 1rem;
`;
