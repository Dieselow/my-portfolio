import Layout from '../components/layout/main';
import Fonts from '../components/fonts';
import Chakra from '../components/charkra';
import { Router } from 'next/router';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function Website({
  Component,
  pageProps,
  router
}: {
  Component: any;
  pageProps: any;
  router: Router;
}) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  );
}

export default Website;
