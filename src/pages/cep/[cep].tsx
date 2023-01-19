import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Share from "../../components/Share";
import fetch from "../../lib/fetch";

export default function Page({ cep, data }: { cep: any; data: any }) {
  const router = useRouter();
  const [code, set_code] = useState(Number(cep));
  const [content, set_content] = useState(data);
  const [last, set_last] = useState<any>();
  const [netx, set_next] = useState<any>();

  useEffect(() => {
    if (cep) {
      set_code(Number(cep));
      set_content(data);
      console.log("cep", cep);
    }
  }, [cep]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("localStorage", content);
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
      } else {
        set_next(null);
      }

      const client_cache_next = localStorage.getItem(
        code < 99999999 ? String(code + 1).padStart(8, "0") : String(99999999)
      );

      if (client_cache_next) {
        console.log("getItem next");
        set_next(JSON.parse(client_cache_next));
      } else {
        set_next(null);
      }
    }
  }, [code]);

  const click_last = (e: any) => {
    console.log("click_last");
    e.preventDefault();
    set_content(last);
    const new_cep = Number(
      code > 0 ? String(code - 1).padStart(8, "0") : String(0).padStart(8, "0")
    );
    set_code(new_cep);
    router.push(
      {
        pathname: `/cep/[cep]`,
        query: {
          new_cep,
        },
      },
      `/cep/${new_cep}`,
      { shallow: true }
    );
  };

  const click_next = (e: any) => {
    console.log("click_next");
    e.preventDefault();
    set_content(netx);
    const new_cep = Number(
      code < 99999999 ? String(code + 1).padStart(8, "0") : String(99999999)
    );
    set_code(new_cep);
    router.push(
      {
        pathname: `/cep/[cep]`,
        query: {
          new_cep,
        },
      },
      `/cep/${new_cep}`,
      { shallow: true }
    );
  };

  return (
    <Layout>
      <Header active="/cep/*" />
      <main className="container py-5 my-5">
        {content ? (
          <>
            {content.errors == null ? (
              <div className="col col-lg-6 mx-auto">
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
                <div className="my-5 text-center ">
                  <Share text={`cep: ${code}`} />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h1>Cep {code} não existe</h1>
                <p>{content.message}</p>
              </div>
            )}
          </>
        ) : (
          <pre>{JSON.stringify(content)}</pre>
        )}
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
                    <span aria-hidden="true">&laquo;</span>
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
                    <span aria-hidden="true">&raquo;</span>
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
  const cep = Number(contex.params.cep);
  console.log("cep", cep);
  if (isNaN(cep)) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
    };
  } else {
    const s_cep = String(cep).padStart(8, "0");
    if (s_cep == "50000000") {
      const result = {
        name: "CepPromiseError",
        message: "Todos os serviços de CEP retornaram erro.",
        type: "service_error",
        errors: [
          {
            name: "ServiceError",
            message: "CEP NAO ENCONTRADO",
            service: "correios",
          },
          {
            name: "ServiceError",
            message: "Erro ao se conectar com o serviço ViaCEP.",
            service: "viacep",
          },
          {
            name: "ServiceError",
            message: "CEP não encontrado na base do WideNet.",
            service: "widenet",
          },
          {
            name: "ServiceError",
            message: "CEP não encontrado na base dos Correios.",
            service: "correios-alt",
          },
        ],
      };

      return {
        props: { cep: Number(cep), data: result },
      };
    }

    const result = await fetch(
      `${
        process.env.HOST
          ? process.env.HOST
          : "https://brasil-search.vercel.app/"
      }/api/cep/${s_cep}`
    );

    //console.log("result", result);
    return {
      props: { cep: Number(cep), data: result },
    };
  }
}

export async function getStaticPaths() {
  /*const size = 99999999;

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
  }*/

  return {
    paths: [{ params: { cep: String(50000000).padStart(8, "0") } }],
    fallback: "blocking",
  };
}
