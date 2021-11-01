import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gitta!</title>
        <meta name='description' content='Gitta - A full extensible git cloud.' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>

      <main className={styles.main}>
        Gitta!
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
