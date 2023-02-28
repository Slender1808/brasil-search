"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Swiftype() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window._st) {
        window._st("install", "5Qby66B1Zsbr3Nqbggq6", "2.0.0");
      }
    }
  }, []);

  return (
    <>
      <input type="text" className="st-default-search-input form-control" />
      
      <div className="st-search-container"></div>
      <Script
        async
        src="https://s.swiftypecdn.com/install/v2/st.js"
        onLoad={() => {
          if (window._st) {
            window._st("install", "5Qby66B1Zsbr3Nqbggq6", "2.0.0");
          }
        }}
      />
    </>
  );
}
