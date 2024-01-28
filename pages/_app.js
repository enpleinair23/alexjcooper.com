import TokyoState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <TokyoState>
    <Head>
  <link rel="icon" href="/icon.ico" />
    </Head>
      <PreLoader />
      <Component {...pageProps} />
    </TokyoState>
  );
}
