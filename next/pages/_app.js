import { setup } from '@redneckz/uni-jsx';
import runtime from 'react/jsx-runtime';

import '../styles/globals.css';

const { jsx, jsxs } = runtime;
setup(jsx, jsxs);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
