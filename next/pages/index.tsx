import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wildless CMS Next Scaffolding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl">Wildless CMS Next Scaffolding</h1>
      </main>
    </div>
  );
};

export default Home;
