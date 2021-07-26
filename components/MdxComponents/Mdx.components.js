import { Anchor, Code, Heading1, Highlight, Hr, List, Paragraph, Pre } from './MdxStyle';

const MDXComponents = {
  h1: Heading1,
  p: Paragraph,
  pre: Pre,
  code: Code,
  a: Anchor,
  Highlight: Highlight,
  hr: Hr,
  li: List
};

export default MDXComponents;
