import Header from "../../components/Header";
import Link from "next/link";
import AVLTree from "avl";

//0000000
//9999999
const size = 5;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://brasilapi.com.br/api/cep/v2/${context.query.cep}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
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

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const tree = new AVLTree();

  let data = [...Array(size + 1)];

  for (let index = 0; index <= size; index++) {
    tree.insert(index);
  }

  let tmp;
  for (let index = 0; index <= size; index++) {
    tmp = tree.at(index);

    data[index] = {
      params: {
        cep: String(tmp.key).padStart(8, "0"),
        key: tmp.key,
        parent: tmp.parent.key,
        left: tmp.left.key,
        right: tmp.right.key,
      },
    };
  }

  return {
    paths: data,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  context.params;

  let [key, parent, left, right] = await Promise.all([
    fetch(`https://brasilapi.com.br/api/cep/v2/${context.params.cep}`).then(
      (response) => response.json()
    ),
    fetch(
      `https://brasilapi.com.br/api/cep/v2/${String(
        context.params.parent
      ).padStart(8, "0")}`
    ).then((response) => response.json()),
    fetch(
      `https://brasilapi.com.br/api/cep/v2/${String(
        context.params.left
      ).padStart(8, "0")}`
    ).then((response) => response.json()),
    fetch(
      `https://brasilapi.com.br/api/cep/v2/${String(
        context.params.right
      ).padStart(8, "0")}`
    ).then((response) => response.json()),
  ]);

  return {
    props: { key, parent, left, right }, // will be passed to the page component as props
  };
}
