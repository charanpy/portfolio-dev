import React from 'react';
import Image from 'next/image';
import {
  BlogIntroData,
  BlogIntroSummary,
  BlogIntroTitle,
  BlogIntroWrapper,
  BlogList,
  Category,
} from './Blog.style';
import Link from 'next/link';

const BlogListComponent = ({
  title,
  slug,
  category,
  published,
  summary,
  time,
}) => {
  return (
    <BlogList>
      <BlogIntroWrapper>
        <Link href={`/blog/${slug}`} passHref>
          <BlogIntroTitle className='cursor'>{title}</BlogIntroTitle>
        </Link>
        <BlogIntroSummary className='published'>{summary}</BlogIntroSummary>

        <BlogIntroData>
          <BlogIntroTitle>
            Category -
            <Category className='cursor'>{category || 'Web dev'}</Category>
          </BlogIntroTitle>
          <BlogIntroTitle className='published'>
            {time} min read - {published}
          </BlogIntroTitle>
        </BlogIntroData>
      </BlogIntroWrapper>
    </BlogList>
  );
};

export default BlogListComponent;
