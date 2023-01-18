import Link from "next/link";

export default function Header({ active }: any) {
  return (
    <header className="d-flex justify-content-center py-3 shadow-lg">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link
            href="/"
            className={active == "/" ? "nav-link active" : "nav-link"}
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/cep/50000000"
            className={active == "/cep/*" ? "nav-link active" : "nav-link"}
          >
            CEP
          </Link>
        </li>
      </ul>
    </header>
  );
}
