import type { ReactNode } from "react";

import Footer from "./Footer";
import Analytics from "./Analytics";
import Adsbygoogle from "./Adsbygoogle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Adsbygoogle />
      <Analytics />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
