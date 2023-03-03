import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout/main'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Layout router={router}>
      <Component {...pageProps} key={router.route}/>
      </Layout>
    </ChakraProvider>
  );
}
