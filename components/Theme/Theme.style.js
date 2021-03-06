import styled from 'styled-components';
import { flex, flexCenter } from '../../styles/common.style';

export const ArrowContainer = styled.div`
  ${flex};
  ${flexCenter};
  cursor: pointer;
`;

export const Arrow = styled.span`
  font-size: 2rem;
  color: ${(props) => props?.theme?.color || '#000'};
  display: flex;
`;

export const ImageContainer = styled(ArrowContainer)``;
