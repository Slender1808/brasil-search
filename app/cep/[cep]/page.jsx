import Link from "next/link";

//           99999999;
//           50000000
//           98950970;

export async function getCep(in_cpe) {
  console.log("getCep", in_cpe);
  let cep = await fetch(`https://brasilapi.com.br/api/cep/v2/${in_cpe}`, {
    cache: "force-cache",
  }).then((response) => response.json());

  return { cep, node: parseInt(in_cpe) };
}

export default async function Page(props) {
  console.log(props);
  const data = await getCep(props.params.cep);

  return (
    <div>
      <main className="container py-5 my-5">
        {data.cep.errors == null ? (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Cep</div>
                {data.cep.cep}
              </div>
            </li>
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Estado</div>
                {data.cep.state}
              </div>
            </li>
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Cidade</div>
                {data.cep.city}
              </div>
            </li>
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Bairro</div>
                {data.cep.neighborhood}
              </div>
            </li>
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Rua</div>
                {data.cep.street}
              </div>
            </li>
            {data.cep.location.coordinates.longitude ? (
              <li className="list-group-item">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">coordinates</div>
                  {data.cep.location.coordinates.longitude}{" "}
                  {data.cep.location.coordinates.latitude}
                </div>
              </li>
            ) : null}
          </ul>
        ) : (
          <div className="text-center">
            <h1>Esse cep não existe</h1>
            <p>{data.cep.message}</p>
          </div>
        )}
        <footer className="my-5 py-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item shadow">
                <Link
                  className="page-link"
                  aria-label="Previous"
                  href={`/cep/${
                    data.node > 0
                      ? String(data.node - 1).padStart(8, "0")
                      : String(0).padStart(8, "0")
                  }`}
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item shadow">
                <Link
                  className="page-link"
                  aria-label="Next"
                  href={`/cep/${
                    data.node < 99999999
                      ? String(data.node + 1).padStart(8, "0")
                      : 99999999
                  }`}
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  );
}
/*
export async function getStaticPaths() {
  const size = 99999999;

  let paths = [
    {
      params: {
        cep: String(50000000).padStart(8, "0"),
      },
    },
  ];
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
*/
