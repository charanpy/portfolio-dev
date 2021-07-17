import styled, { css } from 'styled-components';

export const SharedInput = css`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: normal;
  border-radius: 5px;
  border: ${(props) => `1px solid ${props.theme.secondary}`};
  outline: none;
  background: none;
  color: ${(props) => props.theme.color};
  /* font-family: 'Josefin Sans', sans-serif; */
  font-weight: 200;
  margin-bottom: 2rem;
`;
export const Input = styled.input`
  ${SharedInput};

  &::placeholder {
    font-size: 1.3rem;
    color: ${(props) => props.theme.lighter};
    font-weight: 400;
  }
  @media (max-width: 790px) {
    width: 100%;
  }
`;
