import styled, { css } from 'styled-components';

export const Heading1 = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
`;

export const SharedText = css`
  font-size: 1.74rem;
  font-weight: 400;
  line-height: 1.85;
  word-wrap: break-word;
  color: ${(props) => props.theme.blogText};
  /* font-family: 'Inter', sans-serif; */
`;
export const Paragraph = styled.p`
  ${SharedText};
`;

export const Pre = styled.pre`
  min-width: 10rem;
  height: auto;
  padding: 1.5rem !important;
`;

export const Code = styled.code`
  font-size: 1.5rem;
  line-height: 2;
`;

export const Anchor = styled.a`
  ${SharedText};
  color: #60a5fa;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #3b82f6;
  }
`;
