import type { ContentPageDef } from '@redneckz/wildless-cms-uni-blocks';
import { ContentPage, ContentPageHead } from '@redneckz/wildless-cms-uni-blocks';
import { ContentPageRepository } from '@redneckz/wildless-cms-uni-blocks/lib/content-page-repository';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

const { getAllContentPages, getContentPageBySlug } = ContentPageRepository({
  contentDir: 'content',
  publicDir: 'public',
});

const Page: NextPage<{ data: ContentPageDef }> = ({ data }) => (
  <>
    <ContentPageHead HeadComponent={Head} data={data}>
      <link rel="icon" href="/favicon.ico" />
    </ContentPageHead>
    <ContentPage data={data} />
  </>
);

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };

  const data = await getContentPageBySlug(params.slug as string);
  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllContentPages();
  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};
