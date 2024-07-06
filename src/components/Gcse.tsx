"use client";

import Script from "next/script";

export default function Gcse() {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://cse.google.com/cse.js?cx=e7e2e0b1ebd0945c6"
      />
    </>
  );
}
