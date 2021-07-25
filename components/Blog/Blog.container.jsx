import React from 'react';
import {
  BlogCont,
  BlogPublished,
  BlogTitle,
  BlogWrapper,
  Highlight,
} from './Blog.style';

const BlogContainer = ({ meta, children }) => {
  return (
    <BlogCont>
      <BlogWrapper>
        <BlogTitle>{meta.title}</BlogTitle>
        <BlogPublished>
          ARTICLE BY <Highlight>CHARAN</Highlight>- {meta.published}
        </BlogPublished>
        {children}
      </BlogWrapper>
    </BlogCont>
  );
};

export default BlogContainer;
