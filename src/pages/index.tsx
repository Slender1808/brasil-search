import Header from "../components/Header";
import Layout from "../components/Layout";
//import Gcse from "../components/Gcse";
import Swiftype from "../components/Swiftype";


export default function Home() {
  return (
    <Layout>
      <Header active="/" />
      <main className="py-5 my-5 container">
        <Swiftype />
   
        <div className="gcse-search"></div>
      </main>
    </Layout>
  );
}
