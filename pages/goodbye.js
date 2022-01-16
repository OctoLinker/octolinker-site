import Container from "../components/container";
import Bowser from "bowser";

function GoodBye() {
  let browserName = '';
  try{
    const browser = Bowser.getParser(window.navigator.userAgent);
    browserName = browser.getBrowser().name
  }catch(error) {

  }

  return (
    <>
      <style jsx>{`
      textarea {
        width: 100%;
        max-width: 400px;
        height: 8rem;
        border-radius: 6px;
        padding: 0.5rem;
      }

      p {
        width: 100%;
        max-width: 400px;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 8rem;
      }

      button {
          border: none;
          margin-top: 1rem;
          font-size: 14px;
          font-weight: 700;
          line-height: 46px;
          display: inline-block;
          box-sizing: border-box;
          height: 46px;
          padding: 0 22px;
          cursor: pointer;
          text-transform: uppercase;
          color: #fff;
          border-radius: calc(46px / 2);
          text-decoration: none;
          background-color: #1c1f2b;
        }

        .button:hover {
          text-decoration: none;
        }

      `}</style>
      <Container center={true}>
      <h1>Sorry to see you go</h1>

      <form className="flex flex-col gap-3 w-full" method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKgspy8YDCFhKevW2wAO1hZYsIMdTruDRkBFNb7syuq82eaA/formResponse">
          <p>Please help us understand what didn't work so we can improve OctoLinker for you and others. Thank you.</p>
          <textarea
            type='text'
            name='entry.1798064257'
            required
            defaultValue="I uninstalled because "
            />
          <input
            type='text'
            name='entry.325768311'
            value={browserName}
            readOnly={true}
            hidden
            />

            <button type="submit">Submit response</button>
          </form>
      </Container>
    </>
  );
}

export default GoodBye;
