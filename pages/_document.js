import Script from "next/script";
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  componentDidMount() {
    this.loadFbLoginApi();
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="google-site-verification" content="K6n_i0D944OJIJwD-M5iQ-jy3oAKFS5aTTL3uJOpy9I" />
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7540935582112706"
     crossOrigin="anonymous"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
