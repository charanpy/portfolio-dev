import styled from 'styled-components';

export const SvgContainer = styled.div`
  height: ${(props) => (props?.small ? '1.5rem' : '2rem')};
  width: ${(props) => (props?.small ? '1.5rem' : '2rem')};
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${(props) => (props?.small ? props.theme.secondary : 'none')};

  &:hover {
    stroke: ${(props) => props.theme.secondary};
  }
`;

export const SvglgContainer = styled.div`
  width: 10rem;
  height: 10rem;
  transition: all 500ms ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;
