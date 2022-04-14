import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '../api/blog';
import { ContentPage } from '@redneckz/wildless-cms-uni-blocks';

import '@redneckz/wildless-cms-uni-blocks/dist/common.css';

export default function Blog({ data }) {
  return (
    <div>
      <Head>
        <title>Blog / {data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentPage data={data} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = getPostBySlug(params.slug);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
