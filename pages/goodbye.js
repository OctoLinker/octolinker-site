import Container from "../components/container";

function GoodBye() {
  return (
    <>
      <style jsx>{`
      iframe {
          margin-top: 1px;
      }
  .loading {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-top: 50px;
  }
  .loading:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fd4eff;
    border-color: #fd4eff transparent #fd4eff transparent;
    animation: loading 1.2s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
      `}</style>
      <Container center={true}>
        <div className="loading"></div>
        <iframe onLoad={function() { 
            document.querySelector('.loading').remove()
         }} src="https://docs.google.com/forms/d/e/1FAIpQLSfAmWxqILHEOoQ4x8bN-OOyU08ANy6AphQTBCy1T23sTjtu9Q/viewform?embedded=true" scrolling="no" height="1080" width="100%" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
      </Container>
    </>
  );
}

export default GoodBye;
