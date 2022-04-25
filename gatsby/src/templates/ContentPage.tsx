import { setup } from '@redneckz/uni-jsx';
import { ContentPage, ContentPageDef } from '@redneckz/wildless-cms-uni-blocks';
import type { PageProps } from 'gatsby';
import runtime from 'react/jsx-runtime';

import '@redneckz/wildless-cms-uni-blocks/lib/common.css';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

export default function BlogPost({
  pageContext: { contentPage },
}: PageProps<object, { contentPage: ContentPageDef }>) {
  return <ContentPage data={contentPage} />;
}
