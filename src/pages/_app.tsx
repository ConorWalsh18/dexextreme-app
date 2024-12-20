import '@/styles/globals.css';
import 'devextreme/dist/css/dx.light.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will run only on the client side
    setIsClient(true);
  }, []);

  return (
    <>
      {/* <Head>
        <title>Devextreme App</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head> */}
      {isClient && <Component {...pageProps} />};
    </>
  );
}

export default App;
