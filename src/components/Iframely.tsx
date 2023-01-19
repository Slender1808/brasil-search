import { useEffect } from "react";
import Link from "next/link";

export default function Iframely() {
  useEffect(() => {
    const script = document.createElement("script");
    document.head.append(script);
    script.src = "https:////iframely.net/embed.js";
  }, []);
  return (
    <div className="iframely-embed">
      <div className="iframely-responsive iframely-s">
        <Link
          href="https://brasilapi.com.br/"
          data-iframely-url="//iframely.net/iVRnBgh"
        ></Link>
      </div>
      <style jsx>{`
        .iframely-s {
          height: 140px;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
