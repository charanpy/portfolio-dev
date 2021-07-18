import styled from 'styled-components';

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.theme.light};
  position: relative;
  margin-bottom: ${(props) => (props.mb ? '1.5rem' : '6rem')};
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.secondary};
    left: 0;
  }
`;
