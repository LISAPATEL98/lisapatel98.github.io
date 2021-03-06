import "../styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lisa Patel</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
