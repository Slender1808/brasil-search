import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

//           99999999;
//           50000000
//           98950970;

export default function Cep(props) {
  return (
    <div>
      <Header />
      <main className="container py-5 my-5">
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
                <div className="fw-bold">Cidade</div>
                {props.cep.city}
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
          <div className="text-center">
            <h1 >Esse cep não existe</h1>
            <p>{props.cep.message}</p>
          </div>
        )}
        <footer className="my-5 py-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item shadow">
                <Link href={`/cep/${props.node > 0 ? String(props.node - 1).padStart(8,"0") : String(0).padStart(8,"0")}`}>
                  <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </Link>
              </li>
              <li className="page-item shadow">
                <Link
                  href={`/cep/${
                    props.node < 99999999 ? String(props.node + 1).padStart(8,"0") : 99999999
                  }`}
                >
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const size = 99999999;

  let paths = [{
    params:{
      cep: String(50000000).padStart(8,"0"),
    }
  }];
  for (let index = size - 100; index <= size; index++) {
    paths.push({
      params: {
        cep: String(index).padStart(8, "0"),
      },
    });
  }

  return {
    paths: paths,
    fallback: "blocking",
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  console.log("getStaticProps", context.params.cep);
  let cep = await fetch(
    `https://brasilapi.com.br/api/cep/v2/${context.params.cep}`
  ).then((response) => response.json());

  return {
    props: { cep, node: parseInt(context.params.cep) }, // will be passed to the page component as props
  };
}
