import styled, { css } from 'styled-components';

export const flex = css`
  display: flex;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

export const justify = css`
  justify-content: center;
`;

export const align = css`
  align-items: center;
`;

export const box = css`
  background: ${(props) =>
    props.theme.isDark ? 'transparent' : props.theme.secondary};
  color: ${(props) => (props.theme.isDark ? '#64ffda' : '#fff')};
  border: ${(props) => (props.theme.isDark ? '1px solid #64ffda' : 'none')};
`;

export const Highlight = css`
  color: ${(props) => props.theme.secondary};
`;

export const CenterContainer = styled.div`
  min-height: 90vh;
  ${flexColumn};
  ${flexCenter};
`;

export const ButtonContainer = styled.div`
  margin-right: 1rem;
`;
