import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {

  return (
    <>
      <Head>
        <title>Brasil Search</title>
        <meta name="description" content="Brasil Search" />

        <meta property="og:title" content="Brasil Search" />
        <meta property="og:description" content="Brasil Search" />
      </Head>
      <header>
        <Navbar
          collapseOnSelect
          bg="dark"
          expand="md"
          variant="dark"
          fixed="top"
          className="bg-primary shadow-lg"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <Image alt="Logo" height="24" width="24" src="/favicon.ico" />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="d-flex justify-content-evenly align-items-center w-100">
                <Link href="/cep/5000000">
                  <a className="text-light nav-link" >
                    CEP
                  </a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
