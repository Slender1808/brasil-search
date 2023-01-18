import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={'https://www.googletagmanager.com/gtag/js?id=G-TFK49H4MPB'}
      />
      <Script id="gtag-script" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TFK49H4MPB', {
        page_path: window.location.pathname,
      });
    `}</Script>
    </>
  );
}