import Container from "../components/container";

function Home() {
  return (
    <>
      <style jsx>{`
        img {
          width: 100%;
          max-width: 400px;
        }

        a img {
          margin-bottom: 20px;
          padding: 30px;
          box-shadow: 0 3px 16px rgba(0, 0, 0, 0.2);
          display: inline-block;
        }

        a img:hover {
          box-shadow: 0 6px 26px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <Container center={true}>
        <h1>Design assets</h1>
        <p>
          Our lovely OctoLinker mascot made by{" "}
          <a
            href="https://www.art-noir.net"
            title="Full Stack Creative Marketing // Art Noir"
            target="_blank"
          >
            Art Noir
          </a>
          .
        </p>

        <div>
          <a href="/static/media/logo/octolinker.png" download>
            <img src="/static/octolinker.png" />
          </a>
        </div>

        <h2>Demo</h2>

        <div>
          <a href="/static/screenshot.png" download>
            <img style={{ padding: 0 }} src="/static/screenshot.png" />
          </a>
        </div>

        <h2>Artwork</h2>

        <div>
          <a href="/static/media/artwork/tentacle.png" download>
            <img src="/static/media/artwork/tentacle.png" />
          </a>
        </div>

        <div>
          <a href="/static/media/artwork/octolinker-down.png" download>
            <img src="/static/media/artwork/octolinker-down.png" />
          </a>
        </div>
      </Container>
    </>
  );
}

export default Home;
