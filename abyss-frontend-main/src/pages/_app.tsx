import { AppProps } from 'next/app';
import '../styles/globals.css';
import { PageProvider } from '@/context/pageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
