import Navbar from '@/components/Navbar/Navbar';
import { registerDevExtremeLicense } from '@/config/devextreme-license';
import '@/styles/globals.css';
import 'devextreme/dist/css/dx.light.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    registerDevExtremeLicense();

    // This is needed to make NextJS work with DexExtreme
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <div className="main-container">
            <Navbar />

            <Component {...pageProps} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
