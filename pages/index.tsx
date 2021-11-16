import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <Head>
        <title>Gitta!</title>
        <meta
          name="description"
          content="Gitta - A full extensible git cloud."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="inset-4">Gitta!</main>

      <footer className="inset-8">from gitta</footer>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
