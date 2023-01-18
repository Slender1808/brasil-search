import Header from "../components/Header";
import Gcse from "../components/Gcse"

export default function Home() {
  return (
    <>
      <Header active="/" />
      <main className="pt-5 mt-3 container">
        <Gcse />
        <div className="gcse-search"></div>
      </main>
    </>
  );
}
