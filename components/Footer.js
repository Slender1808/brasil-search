import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link href="https://github.com/Slender1808/brasil-search">
            <a className="nav-link px-2 text-muted">Sorce code</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
