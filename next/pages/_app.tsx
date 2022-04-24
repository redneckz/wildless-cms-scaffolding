import { setup } from '@redneckz/uni-jsx';
import type { AppProps } from 'next/app';
import runtime from 'react/jsx-runtime';

import '@redneckz/wildless-cms-uni-blocks/lib/common.css';
import '../styles/globals.css';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
