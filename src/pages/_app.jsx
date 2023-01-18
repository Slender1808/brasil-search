import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "ononline" in window &&
      "onoffline" in window
    ) {
      setIsOnline(window.navigator.onLine);
      if (!window.ononline) {
        window.addEventListener("online", () => {
          setIsOnline(true);
        });
      }
      if (!window.onoffline) {
        window.addEventListener("offline", () => {
          setIsOnline(false);
        });
      }
    }
  }, []);

  const router = useRouter();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined &&
      isOnline
    ) {
      // skip index route, because it's already cached under `start-url` caching object
      if (router.route !== "/") {
        const wb = window.workbox;
        wb.active.then((worker) => {
          wb.messageSW({ action: "CACHE_NEW_ROUTE" });
        });
      }
    }
  }, [isOnline, router.route]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="K6n_i0D944OJIJwD-M5iQ-jy3oAKFS5aTTL3uJOpy9I"
        />
        <meta name="application-name" content="Brasil Search" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Brasil Search" />
        <meta name="description" content="Search Engine" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="msapplication-TileColor" content="#009c37ff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#009c37ff" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:url" content="https://brasil-search.vercel.app/" />
        <meta name="twitter:title" content="Brasil Search" />
        <meta name="twitter:description" content="Search Engine" />
        <meta
          name="twitter:image"
          content="https://brasil-search.vercel.app/icon-192x192.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brasil Search" />
        <meta property="og:description" content="Search Engine" />
        <meta property="og:site_name" content="Brasil Search" />
        <meta property="og:url" content="https://brasil-search.vercel.app" />
        <meta
          property="og:image"
          content="https://brasil-search.vercel.app/icon-512x512.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
