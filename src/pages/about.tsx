import Header from "../components/Header";
import Layout from "../components/Layout";
import Iframely from "@/components/Iframely";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Header active="/about" />
      <main className="pt-5 mt-3 container">
        <Image
          className="d-block mx-auto"
          alt="logo do brasil search"
          src="/icon-192x192.png"
          width={192}
          height={192}
        />
        <section className="py-5 mb-5 col col-lg-6 mx-auto">
          <h2>Sobre</h2>
          <p>
            Este projeto aprimora funções do site brasilapi.com.br adicionando
            mais funções e melhorando a usabilidade e a interface. Algumas das
            novas funções incluem:
          </p>
          <ul>
            <li>
              Busca avançada: permite que os usuários filtrem resultados por
              data, localização, categoria e outros critérios, tornando mais
              fácil encontrar o conteúdo desejado.
            </li>
            <li>
              Integração com redes sociais: os usuários podem compartilhar
              resultados de pesquisa diretamente em suas redes sociais,
              expandindo a divulgação do conteúdo.
            </li>
            <li>
              Visualização de resultados: os resultados de pesquisa serão
              apresentados de forma mais clara e organizada, com imagens e
              descrições resumidas para facilitar a navegação.
            </li>
          </ul>
        </section>
        <div className="col col-md-6 col-xl-4 mx-auto">
          <Iframely />
        </div>
      </main>
    </Layout>
  );
}
