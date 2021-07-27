import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import BlogViews from '../../lib/BlogViewService';
import { getFiles, getFileBySlug } from '../../lib/MdxBlog';
import Seo from '../../layout/Seo/Seo';
import Container from '../../layout/Container/Container.component';
import MDXComponents from '../../components/MdxComponents/Mdx.components';
import BlogContainer from '../../components/Blog/Blog.container';

export default function Blog({ mdxSource, frontMatter }) {
  const { data } = BlogViews(frontMatter.slug);
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/dracula-prism/dist/css/dracula-prism.css'
        ></link>
      </Head>
      <Seo
        title={frontMatter.title}
        description={frontMatter.summary}
        ogTitle={`${frontMatter.summary}- Charan`}
      />
      <Container>
        <BlogContainer meta={frontMatter} views={data?.views || 1}>
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </BlogContainer>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const posts = await getFiles('blog');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
  return { props: post };
}
