import React from 'react';
import {
  BlogCont,
  BlogMetaInfo,
  BlogPublished,
  BlogTime,
  BlogTitle,
  BlogWrapper,
  Highlight,
} from './Blog.style';

const BlogContainer = ({ meta, children, views }) => {
  return (
    <BlogCont>
      <BlogWrapper>
        <div style={{ width: 'fit-content' }}>
          <BlogTitle>{meta.title}</BlogTitle>
          <BlogMetaInfo>
            <BlogPublished>
              BY <Highlight>CHARAN</Highlight>- {meta.published}
            </BlogPublished>
            <BlogTime>
              {meta.readingTime} min read - {views}{' '}
              {views > 1 ? 'views' : 'view'}{' '}
            </BlogTime>
          </BlogMetaInfo>
        </div>

        {children}
      </BlogWrapper>
    </BlogCont>
  );
};

export default BlogContainer;
