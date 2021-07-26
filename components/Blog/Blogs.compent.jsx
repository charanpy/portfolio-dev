import { AllBlog } from './Blog.style';
import BlogList from './BlogList.component';

const BlogComponent = ({ blogs }) => {
  console.log(blogs);
  return (
    <AllBlog>
      {blogs.map(
        ({ title, slug, category, published, summary, readingTime }) => (
          <BlogList
            key={title}
            title={title}
            slug={slug}
            category={category}
            published={published}
            summary={summary}
            time={readingTime}
          />
        )
      )}
    </AllBlog>
  );
};

export default BlogComponent;
