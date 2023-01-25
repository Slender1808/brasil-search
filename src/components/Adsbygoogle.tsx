"use client";

import { useEffect } from "react";

export default function Adsbygoogle() {
  useEffect(() => {
    const script = document.createElement("script");
    document.head.append(script);
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7540935582112706";
  }, []);
  return <></>;
}
