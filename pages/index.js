import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
  console.log("Home")  

  return (
    <div>
      <Header />
      <main className="pt-5 mt-5">
        <Script
          async
          src="https://cse.google.com/cse.js?cx=e7e2e0b1ebd0945c6"
        />
        <div className="gcse-search"></div>
      </main>
      <Footer />
    </div>
  );
}
