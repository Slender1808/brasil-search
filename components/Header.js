import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav

          className="bg-primary shadow-lg"
        >
          <div className="container">
            <nav className="d-flex justify-content-evenly align-items-center w-100">
              <Link href="/cep/50000000" className="text-light nav-link">
                CEP
              </Link>
            </nav>
          </div>
        </nav>
      </header>
    </>
  );
}
