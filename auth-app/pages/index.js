import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import Container from "../styles/Container";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next-auth</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Container>
        <Nav />
      </Container>
    </div>
  );
}
