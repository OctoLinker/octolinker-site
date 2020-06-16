import Container from "../components/container";
import Head from 'next/head'

function Home() {
  return (
    <>
     <Head>
        <meta name='robots' content='noindex, follow' />
      </Head>
      <Container center={true}>
        <h1>Subscription confirmed!</h1>
        <p>
          Thanks for joining the mailing list. Stay tuned!
        </p>
         
      </Container>
    </>
  );
}

export default Home;
