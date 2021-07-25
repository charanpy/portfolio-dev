import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

const calculateReadingTime = (wordCount) => {
  const readingTime = wordCount / 200;
  return Math.ceil(readingTime.toFixed(2));
};

const metaDataForFile = (source) => {
  const { data, content } = matter(source);
  const wordCount = content.split(/\s+/gu).length;
  const readingTime = calculateReadingTime(wordCount);
  return {
    data,
    readingTime,
    content,
  };
};

const getSourceMdx = async (content) => {
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-prism'),
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor'],
            },
          },
        ],
      ],
    },
  });
};

export const getFileBySlug = async (type, slug) => {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`))
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`));

  const { data, readingTime, content } = metaDataForFile(source);
  const mdxSource = await getSourceMdx(content);
  return {
    mdxSource,
    frontMatter: {
      readingTime,
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async (type) => {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data, readingTime } = metaDataForFile(source);

    return [
      {
        ...data,
        readingTime,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
};
