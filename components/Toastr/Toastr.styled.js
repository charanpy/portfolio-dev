import styled from 'styled-components';

export const ToastrContainer = styled.div`
  position: absolute;
  top: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 2.5%;
  z-index: 11111111;
  min-width: 15rem;
  padding: 1rem;
  background: red;
  border-radius: 5px;
  background-color: ${(props) =>
    props.variant === 'success' ? 'rgb(0, 230, 118)' : '#dc3545'};
`;

export const ToastrData = styled.p`
  font-family: inherit;
  font-size: 1.7rem;
  font-weight: normal;
  color: white;
`;

export const CloseContainer = styled.div`
  margin: 0 1.3rem;
`;
