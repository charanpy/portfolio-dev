import styled from 'styled-components';
import { flex, flexCenter, flexColumn } from '../../styles/common.style';
import { SharedInput } from '../Input/Input.style';

export const ContactMeContainer = styled.section`
  min-height: 90vh;
  ${flexColumn};
  ${flexCenter};
`;

export const UserDetail = styled.div`
  ${flex};
  ${flexCenter};
  justify-content: space-between;

  @media (max-width: 790px) {
    ${flexColumn};
  }
`;

export const Form = styled.form`
  width: 50%;
  ${flexColumn};
  justify-content: center;
  @media (max-width: 790px) {
    width: 90%;
  }
`;

export const TextArea = styled.textarea`
  ${SharedInput};
  width: 100%;
  /* margin-top: 1.9rem; */
  height: 10rem;
  font-family: inherit;
  color: ${(props) => props.theme.color};

  &::placeholder {
    font-family: inherit;
    color: ${(props) => props.theme.lighter};
  }
`;
