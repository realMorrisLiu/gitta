import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

function GittaApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default GittaApp;
