import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import Adsbygoogle from "../components/Adsbygoogle"

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link rel="manifest" href="/manifest.json" />
        <title>Brasil Search</title>
        <meta
          name="google-site-verification"
          content="K6n_i0D944OJIJwD-M5iQ-jy3oAKFS5aTTL3uJOpy9I"
        />
        <Adsbygoogle/>
        <Analytics />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
