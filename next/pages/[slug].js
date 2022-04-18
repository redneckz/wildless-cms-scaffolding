import { ContentPage } from '@redneckz/wildless-cms-uni-blocks';
import '@redneckz/wildless-cms-uni-blocks/dist/common.css';
import Head from 'next/head';
import { ContentPageHead } from '../content-page';
import { getAllContentPages, getContentPageBySlug } from '../content-page-repository';

export default function Page({ data }) {
  return (
    <>
      <ContentPageHead HeadComponent={Head} data={data}>
        <link rel="icon" href="/favicon.ico" />
      </ContentPageHead>
      <ContentPage data={data} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getContentPageBySlug(params.slug);
  return { props: { data } };
}

export async function getStaticPaths() {
  const pages = await getAllContentPages();
  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
