import styled from 'styled-components';
import {
  flex,
  flexCenter,
  flexColumn,
  Highlight,
} from '../../styles/common.style';

export const CollobrateContainer = styled.div`
  ${flexColumn};
  ${flexCenter};
  padding: 10rem 0;
`;

export const CollabrateWrapper = styled.section`
  text-align: center;
`;

export const CollabrateHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.theme.light};
  margin-bottom: 1.4rem;
`;

export const CollabrateText = styled.p`
  font-size: 2rem;
  font-weight: 200;
  color: ${(props) => props.theme.lighter};
`;

export const HighlightText = styled.span`
  ${Highlight}
`;

export const SocialLink = styled.div`
  ${flex};
  ${flexCenter};
  margin: 3rem 0 2rem 0;

  & > * {
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const LinkCenter = styled.a`
  ${flex};
  ${flexCenter};
`;
