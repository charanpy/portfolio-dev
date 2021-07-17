import styled from 'styled-components';

export const ContactContainer = styled.div`
  position: fixed;
  top: 50%;
  bottom: 50%;
  right: 5%;
  line-height: 1.9;
  @media (max-width: 790px) {
    display: none;
  }
`;

export const Navigator = styled.a`
  margin-bottom: 3rem;
`;
