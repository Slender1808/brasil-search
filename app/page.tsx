import Script from "next/script";
import Header from "../components/Header";

export default function Home() {
  console.log("Home");

  return (
    <>
    <Header active="/" />
      <main className="pt-5 mt-3 container">
        <Script
          async
          src="https://cse.google.com/cse.js?cx=e7e2e0b1ebd0945c6"
        />
        <div className="gcse-search"></div>
      </main>
    </>
  );
}
