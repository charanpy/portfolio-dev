import styled from 'styled-components';

export const Anchor = styled.a`
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
`;
