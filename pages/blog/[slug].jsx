import { MDXRemote } from 'next-mdx-remote';
import Container from '../../layout/Container/Container.component';
import MDXComponents from '../../components/MdxComponents/Mdx.components';
import { getFiles, getFileBySlug } from '../../lib/MdxBlog';
import BlogContainer from '../../components/Blog/Blog.container';
import Head from 'next/head';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/dracula-prism/dist/css/dracula-prism.css'
        ></link>
      </Head>
      <Container>
        <BlogContainer meta={frontMatter}>
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
  console.log(params);
  const post = await getFileBySlug('blog', params.slug);
  return { props: post };
}
