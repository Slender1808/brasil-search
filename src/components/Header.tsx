import Link from "next/link";
import Image from "next/image";
import favicon32 from "../../images/favicon-32x32.png";

export default function Header({ active }: any) {
  return (
    <header className="d-flex py-3 shadow-lg align-items-center justify-content-center">
      <Link
        href="/"
        className="mx-3 d-flex align-items-center col-md-3 text-dark text-decoration-none "
      >
        <Image
          alt="logo do brasil search"
          src={favicon32}
          width={32}
          height={32}
        />
      </Link>
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
        <li className="nav-item">
          <Link
            href="about"
            className={active == "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}
