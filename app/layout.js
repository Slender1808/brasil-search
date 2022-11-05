import Script from "next/script";
//import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

import Analytics from "../components/Analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brasil Search</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="K6n_i0D944OJIJwD-M5iQ-jy3oAKFS5aTTL3uJOpy9I"
        />
        <Script
          crossOrigin="anonymous"
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3304167426675646"
        ></Script>
        <Analytics />
      </head>
      <body>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
