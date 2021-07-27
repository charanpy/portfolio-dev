import useSwr from 'swr';

const BlogViews = (title) => {
  const { data } = useSwr(`/api/blog/view/${title}`);

  return {
    data,
  };
};

export default BlogViews;
