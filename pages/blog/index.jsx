import BlogComponent from '../../components/Blog/Blogs.compent';
import Seo from '../../layout/Seo/Seo';
import HeadingComponent from '../../components/Heading/Heading.component';
import { getAllFilesFrontMatter } from '../../lib/MdxBlog';
import {
  BlogPageContainer,
  CenterContainer,
} from '../../components/Blog/Blog.style';
import { ProjectName } from '../../components/ProjectOverview/ProjectOverview.style';

const Blog = ({ blogs }) => {
  return (
    <>
      <Seo
        title='Blog - Charan'
        ogTitle='Blog - Frontend,Backend,React native blog'
        description='Blog - Frontend,Backend,React native blog'
      />
      <BlogPageContainer>
        <CenterContainer>
          <HeadingComponent mb>Blog</HeadingComponent>
          <ProjectName>
            <a
              href='https://durgicharan81.medium.com/'
              target='_blank'
              rel='noreferrer'
            >
              Visit my Medium blogs
            </a>
          </ProjectName>
        </CenterContainer>
        <BlogComponent blogs={blogs} />
      </BlogPageContainer>
    </>
  );
};

export const getStaticProps = async () => {
  const blogs = await getAllFilesFrontMatter('blog');
  return {
    props: {
      blogs,
    },
  };
};

export default Blog;
