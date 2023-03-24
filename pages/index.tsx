import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Meueadflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Meueadflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!!!"
        />
      </Head>
      <main></main>
    </>
  );
};

export default HomeNoAuth;
