"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

export default function Swiftype() {
  const ejInstance = useRef(false);
/*
  useEffect(() => {
    if (ejInstance.current) {
      if (typeof window !== "undefined") {
        if (window._st) {
          console.log("install swiftype");
          const input = document.createElement("input");
          document.body.append(input);
          input.type = "text";
          input.className = "st-default-search-input";

          const container = document.createElement("div");
          document.body.append(container);
          container.className = "st-search-container";
          //window._st("install", "5Qby66B1Zsbr3Nqbggq6", "2.0.0");
        }
      }
    }
    ejInstance.current = true;
    return () => {};
  }, [ejInstance]);*/

  return (
    <>
    <div id="swiftype"></div>
      <Script
        async
        strategy="afterInteractive"
        src="https://s.swiftypecdn.com/install/v2/st.js"
        onLoad={() => {
          const input = document.createElement("input");
          document.querySelector("#swiftype").append(input);
          input.type = "text";
          input.className = "st-default-search-input";

          const container = document.createElement("div");
          document.querySelector("#swiftype").append(input);
          container.className = "st-search-container";

          window._st("install", "5Qby66B1Zsbr3Nqbggq6", "2.0.0");
        }}
      />
    </>
  );
}
