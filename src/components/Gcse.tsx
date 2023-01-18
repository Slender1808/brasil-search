"use client";

import { useEffect } from "react";

export default function Gcse() {
  useEffect(() => {
    const script = document.createElement("script");
    document.head.append(script);
    script.src = "https://cse.google.com/cse.js?cx=e7e2e0b1ebd0945c6";
  }, []);
  return <></>;
}
