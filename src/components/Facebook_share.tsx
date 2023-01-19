import { useEffect } from "react";
import Link from "next/link";

export default function Facebook_share() {
  useEffect(() => {
    const script = document.createElement("script");
    document.head.append(script);
    script.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1";
    script.crossOrigin = "anonymous";
    script.nonce = "SCP5YVC8";
  }, []);
  return (
    <div className="iframely-embed">
      <div className="col-lg-6 my-3">
        <div
          className="fb-share-button w-100"
          data-href="https://developers.facebook.com/docs/plugins/"
          data-layout="button_count"
          data-size="large"
        >
          <Link
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            Compartilhar
          </Link>
        </div>
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
