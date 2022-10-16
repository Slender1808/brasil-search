import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import AVLTree from "avl";

//0000000
//9999999

export default function Cep(props) {
  console.log("props", props);

  return (
    <div>
      <Header />
      <main className="container pt-5 mt-5">
        {props.cep.errors == null ? (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Cep</div>
                {props.cep.cep}
              </div>
            </li>
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Estado</div>
                {props.cep.state}
              </div>
            </li>
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Bairro</div>
                {props.cep.neighborhood}
              </div>
            </li>
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Rua</div>
                {props.cep.street}
              </div>
            </li>
            {props.cep.location.coordinates.longitude ? (
              <li className="list-group-item">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">coordinates</div>
                  {props.cep.location.coordinates.longitude}{" "}
                  {props.cep.location.coordinates.latitude}
                </div>
              </li>
            ) : null}
          </ul>
        ) : (
          <h1 className="text-center">{props.cep.message}</h1>
        )}
        <footer className="my-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <Link href={`/cep/${props.node - 1}`}>
                  <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </Link>
              </li>
              <li className="page-item">
                <Link href={`/cep/${props.left}`}>
                  <a className="page-link">{props.left}</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href={`/cep/${props.parent}`}>
                  <a className="page-link">{props.parent}</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href={`/cep/${props.right}`}>
                  <a className="page-link">{props.right}</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href={`/cep/${props.node + 1}`}>
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </main>

      <Footer/>
    </div>
  );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const size = 9999999;

  let paths = [];
  for (let index = 0; index <= size; index++) {
    paths.push({
      params: {
        cep: String(index).padStart(8, "0"),
      },
    });
  }

  //console.log("paths", paths);

  return {
    paths: paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const size = 9999999;

  const tree = new AVLTree();

  for (let index = 0; index <= size; index++) {
    tree.insert(index);
  }

  const root = tree.at(Math.round(size / 2)).key;

  const node = tree.find(parseInt(context.params.cep));
  //console.log("node", node);

  const props = {
    node: parseInt(context.params.cep),
    parent: node.parent ? node.parent.key : root,
    left: node.left ? node.left.key : root,
    right: node.right ? node.right.key : root,
  };

  tree.destroy();

  console.log("getStaticProps", context.params.cep);
  let cep = await fetch(
    `https://brasilapi.com.br/api/cep/v2/${context.params.cep}`
  ).then((response) => response.json());

  return {
    props: { cep, ...props }, // will be passed to the page component as props
  };
}
