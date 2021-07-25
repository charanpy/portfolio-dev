import { AllBlog } from './Blog.style';
import BlogList from './BlogList.component';

const BlogComponent = ({ blogs }) => {
  return (
    <AllBlog>
      {blogs.map(({ title, image, slug, category, published, summary }) => (
        <BlogList
          image={image}
          key={title}
          title={title}
          slug={slug}
          category={category}
          published={published}
          summary={summary}
        />
      ))}
    </AllBlog>
  );
};

export default BlogComponent;
