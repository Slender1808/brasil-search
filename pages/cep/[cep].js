import Header from "../../components/Header";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export async function getServerSideProps(context){
  const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${context.query.cep}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Indice(props) {
  return (
    <div>
      <Header />

      <main className="container pt-5 mt-5">
        <section className="row">{JSON.stringify(props)}</section>
      </main>

      <footer>
        <Link href="https://github.com/Slender1808/brasil-search">
          https://github.com/Slender1808/brasil-search
        </Link>
      </footer>
    </div>
  );
}
