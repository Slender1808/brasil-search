import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import fetch from "../../lib/fetch";

export default function Page({ cep, data }: { cep: any; data: any }) {
  const [code, set_code] = useState(Number(cep));
  const [content, set_content] = useState(data);
  const [last, set_last] = useState();
  const [netx, set_next] = useState();

  useEffect(() => {
    set_code(Number(cep));
  }, [cep]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const client_cache = localStorage.getItem(String(code));
      console.log("client_cache", client_cache);
      if (client_cache !== null) {
        console.log("getItem");
        set_content(JSON.parse(client_cache));
      } else if (content) {
        console.log("setItem");
        localStorage.setItem(String(code), JSON.stringify(content));
      }

      const client_cache_last = localStorage.getItem(
        code > 0
          ? String(code - 1).padStart(8, "0")
          : String(0).padStart(8, "0")
      );

      if (client_cache_last) {
        console.log("getItem last");
        set_last(JSON.parse(client_cache_last));
      }

      const client_cache_next = localStorage.getItem(
        code < 99999999 ? String(code + 1).padStart(8, "0") : String(99999999)
      );

      if (client_cache_next) {
        console.log("getItem next");
        set_next(JSON.parse(client_cache_next));
      }
    }
  }, [code]);

  const click_last = (e: any) => {
    console.log("click_last");
    e.preventDefault();
    set_content(last);
    set_code(
      Number(
        code > 0
          ? String(code - 1).padStart(8, "0")
          : String(0).padStart(8, "0")
      )
    );
  };

  const click_next = (e: any) => {
    console.log("click_next");
    e.preventDefault();
    set_content(netx);
    set_code(
      Number(
        code < 99999999 ? String(code + 1).padStart(8, "0") : String(99999999)
      )
    );
  };

  return (
    <Layout>
      <Header active="/cep/*" />
      <main className="container py-5 my-5">
        {content ? (
          <>
            {content.errors == null ? (
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Cep</div>
                    {content.cep}
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Estado</div>
                    {content.state}
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Cidade</div>
                    {content.city}
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Bairro</div>
                    {content.neighborhood}
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Rua</div>
                    {content.street}
                  </div>
                </li>
                {content.location.coordinates.longitude ? (
                  <li className="list-group-item">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">coordinates</div>
                      {content.location.coordinates.longitude}{" "}
                      {content.location.coordinates.latitude}
                    </div>
                  </li>
                ) : null}
              </ul>
            ) : (
              <div className="text-center">
                <h1>Cep {code} não existe</h1>
                <p>{content.message}</p>
              </div>
            )}
          </>
        ) : null}
        <footer className="my-5 py-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item shadow">
                {last ? (
                  <a
                    className="page-link"
                    aria-label="Previous"
                    onClick={click_last}
                    href={`/cep/${
                      code > 0
                        ? String(code - 1).padStart(8, "0")
                        : String(0).padStart(8, "0")
                    }`}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                ) : (
                  <Link
                    className="page-link"
                    aria-label="Previous"
                    href={`/cep/${
                      code > 0
                        ? String(code - 1).padStart(8, "0")
                        : String(0).padStart(8, "0")
                    }`}
                  >
                    <span aria-hidden="true">&laquo;</span>top
                  </Link>
                )}
              </li>
              <li className="page-item shadow">
                {netx ? (
                  <a
                    className="page-link"
                    aria-label="Next"
                    onClick={click_next}
                    href={`/cep/${
                      code < 99999999
                        ? String(code + 1).padStart(8, "0")
                        : 99999999
                    }`}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                ) : (
                  <Link
                    className="page-link"
                    aria-label="Next"
                    href={`/cep/${
                      code < 99999999
                        ? String(code + 1).padStart(8, "0")
                        : 99999999
                    }`}
                  >
                    <span aria-hidden="true">&raquo;</span>top
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </Layout>
  );
}

export async function getStaticProps(contex: any) {
  const { cep } = contex.params;

  const result = await fetch(
    `${
      process.env.HOST ? process.env.HOST : "https://brasil-search.vercel.app/"
    }/api/cep/${String(cep).padStart(8, "0")}`
  );

  return {
    props: { cep: cep, data: result },
  };
}

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
    fallback: true,
  };
}
