import Header from "../../components/Header";
import Link from "next/link";

export default function Range() {
  const indices = [...Array(10000)];

  return (
    <div>
      <Header />
      <main className="container pt-5 mt-5">
        <section className="row">
          <ol className="list-group list-group-numbered">
            {indices.map((e, i) => {
              return (
                <li key={i} className="list-group-item">
                  <Link
                    href={`/index/cep/${i}`}
                  >
                    <a>
                      cep:
                      {(("0000" + (i + 1)).slice(-4) + "00000000").slice(0, 8)}-
                      {(("0000" + i).slice(-4) + "00000000").slice(0, 8)}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </main>

      <footer>
        <Link href="https://github.com/Slender1808/brasil-search">
          https://github.com/Slender1808/brasil-search
        </Link>
      </footer>
    </div>
  );
}
