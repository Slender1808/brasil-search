import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
  

  return (
    <div>
      <Header />
      <main className="pt-5 mt-5">
        <Script
          async
          src="https://cse.google.com/cse.js?cx=33882ab2bdf9a4f8a"
        />
        <div className="gcse-search"></div>
      </main>
      <Footer />
    </div>
  );
}
