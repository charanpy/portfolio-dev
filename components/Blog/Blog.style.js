import styled, { css } from 'styled-components';
import { flex, flexCenter, flexColumn } from '../../styles/common.style';

export const BlogTitle = styled.h1`
  font-size: 4rem;
  font-weight: bolder;
  color: ${(props) => props.theme.light};
  @media (max-width: 790px) {
    font-size: 3rem;
  }
`;

export const BlogWrapper = styled.div`
  margin: 5rem 0;
  ${flexColumn};
  flex-wrap: wrap;
  width: 50vw;
  @media (max-width: 790px) {
    width: 100vw;
    padding:2rem;
  }
`;

export const CenterContainer = styled.div`
  ${flex};
  ${flexCenter};
`;

export const BlogPublished = styled.p`
  font-weight: lighter;
  font-size: 1.35rem;
  margin: 2rem 0;
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.secondary};
`;

export const BlogCont = styled.section`
  ${flex};
  ${flexCenter};
`;

export const AllBlog = styled.ul`
  margin: 5rem 0;
  ${flex};
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 790px) {
    justify-content: center;
  }
`;

export const BlogPageContainer = styled.main`
  margin-top: 15vh;
`;

export const BlogList = styled.li`
  ${flex};
  background: ${(props) => props.theme.blogBox};
  width: 30%;
  min-height: 18rem;
  box-shadow: ${(props) => ` 0px 8px 24px ${props.theme.boxShadow}`};
  margin: 2rem;

  @media (max-width: 790px) {
    width: 90%;

    flex-direction: column;
  }
`;

export const SharedStyle = css`
  ${flex};
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.7rem;
  font-weight: ${(props) => (props.theme.isDark ? 300 : 'bold')};
  color: ${(props) => props.theme.blogText};
`;

export const BlogIntroTitle = styled.h1`
  ${SharedStyle};
  @media (max-width: 790px) {
    margin-top: 1rem;
  }
`;

export const BlogIntroWrapper = styled.div`
  ${flexColumn};
  margin: 1rem 0;
  padding: 1rem 1rem;
  justify-content: space-between;
  flex-grow: 1;
`;

export const BlogIntroData = styled.div`
  ${flex};
  justify-content: space-between;
`;

export const Category = styled.span`
  color: ${(props) => props.theme.secondary};
  margin-left: 0.5rem;
`;

export const BlogIntroSummary = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${(props) => props.theme.lighter};
  word-wrap: break-word;
  line-height: 1.8;
`;

export const BlogMetaInfo = styled.div`
  ${flex};
  justify-content: space-between;
`;

export const BlogTime = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.35rem;
  margin: 2rem 0;
`;