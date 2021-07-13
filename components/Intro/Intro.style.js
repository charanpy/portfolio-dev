import styled, { css } from 'styled-components';
import { flex, flexCenter, flexColumn } from '../../styles/common.style';

export const IntroContainer = styled.section`
  ${flex};
  ${flexCenter};
  justify-content: space-around;
  min-height: 70vh;
`;

export const IntroWrapper = styled.div`
  ${flexColumn};
  ${flexCenter};
  line-height: 1.5;
  flex-wrap: wrap;
`;

export const Field = styled.h3`
  color: ${(props) => props.theme.textLight};
  font-size: 1.4rem;
  font-weight: 700;
`;

export const SharedText = css`
  font-size: 4rem;
  font-weight: 400;
`;

export const FieldText = styled.h1`
  ${SharedText};
  ${flex};
`;

export const FieldTextColor = styled.h1`
  ${SharedText};
  font-size: 3rem;
  color: rgb(119, 119, 121);
  font-weight: 400;
`;

export const AboutMe = styled.p`
  font-size: 1.79rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const CoverWrapper = styled.div`
  ${flex};
  ${flexCenter};
`;
