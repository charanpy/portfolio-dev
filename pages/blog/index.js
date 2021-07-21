import React from 'react';
import HeadingComponent from '../../components/Heading/Heading.component';
import Container from '../../layout/Container/Container.component';
import { CenterContainer } from '../../styles/common.style';

const Blog = () => {
  return (
    <Container>
      <CenterContainer>
        <HeadingComponent>Under Development :{'('}</HeadingComponent>
      </CenterContainer>
    </Container>
  );
};

export default Blog;
