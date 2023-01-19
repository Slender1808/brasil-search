import Header from "../components/Header";
import Layout from "../components/Layout";
import Gcse from "../components/Gcse";

export default function Home() {

  return (
    <Layout>
      <Header active="/" />
      <main className="py-5 my-5 container">
        <Gcse />
        <div className="gcse-search"></div>
      </main>
    </Layout>
  );
}
