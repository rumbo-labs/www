import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import { useEffect } from 'react';
import Script from 'next/script';

export function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://thirtyseven-light.rideshare.so/script.js"
        data-site="ACRSPLSJ"
        defer
      />
    </>
  );
}

export default appWithTranslation(App);

