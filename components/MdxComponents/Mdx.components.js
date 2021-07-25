import HighlightComponent from '../Highlight/Highlight.component';
import { Anchor, Code, Heading1, Paragraph, Pre } from './MdxStyle';

const MDXComponents = {
  h1: Heading1,
  p: Paragraph,
  pre: Pre,
  code: Code,
  a: Anchor,
  Highlight: HighlightComponent,
};

export default MDXComponents;
