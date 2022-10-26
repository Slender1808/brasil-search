import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return <>
    <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3304167426675646"
          crossorigin="anonymous"
        ></Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
