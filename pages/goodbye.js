import Container from "../components/container";
import Bowser from "bowser";
import { useRef, useState } from "react";

function GoodBye() {
  let browserName = '';
  try {
    const browser = Bowser.getParser(window.navigator.userAgent);
    browserName = browser.getBrowser().name
  } catch (error) {

  }

  const [message, setMessage] = useState("I uninstalled it because ")
  const [hint, showHint] = useState(false)
  const ref = useRef();

  const reasons = [
    'Doesn\'t have the features I need',
    'There were technical issues',
    'I had performance issues',
    'I don\'t use it',
    'I have privacy concerns',
  ]

  const issueUrl = `https://github.com/OctoLinker/OctoLinker/issues/new?labels=feedback&title=Feedback&body=${encodeURI(message)}`


  return (
    <>
      <style jsx>{`
      textarea {
        width: 100%;
        height: 8rem;
        border-radius: 6px;
        padding: 0.5rem;
      }



      .container {
        outline: 1px solid green;
        flex-direction: column;
        align-items: center;
        margin-bottom: 8rem;
      }

      button {
          border: none;
          font-size: 14px;
          font-weight: 700;
          line-height: 46px;
          display: inline-block;
          box-sizing: border-box;
          height: 46px;
          padding: 0 22px;
          margin-top: 1rem;
          margin-right: 1rem;
          cursor: pointer;
          text-transform: uppercase;
          color: #fff;
          border-radius: calc(46px / 2);
          text-decoration: none;
          background-color: #1c1f2b;
        }

        a {
          color: #1c1f2b;
        }

        a:hover {
          text-decoration: underline;
        }

        .button:hover {
          text-decoration: none;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 0;
          padding: 0 0 0 1rem;
          list-style-position: inside;
        }

        li {
          cursor: pointer;
        }

        li:hover {
          opacity: 0.7;
        }

        h3 {
          padding-top: 2rem;
          margin-bottom: 0.5rem;
        }

        @media only screen and (min-width: 768px) {
          .inner {
            padding: 0 150px 3rem 150px;
          }
        }
      `}</style>
      <Container>
        <h1>Sorry to see you go</h1>
        <div className="inner">
          Please help us understand what didn't work so we can improve OctoLinker for you and others. Thank you.


          <h3>Choose a reason</h3>
          <ul>
            {reasons.map(reason => {
              return (<li onClick={() => {
                showHint(true)
                setMessage(`${reason} `)
                ref.current.focus();
              }}>{reason}</li>)
            })}
          </ul>

          <h3>or write your feedback</h3>
          <form method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKgspy8YDCFhKevW2wAO1hZYsIMdTruDRkBFNb7syuq82eaA/formResponse">
            <textarea
              ref={ref}
              type='text'
              name='entry.1798064257'
              required
              onChange={(evt) => setMessage(evt.target.value)}
              value={message}
            />
            <input
              type='text'
              name='entry.325768311'
              value={browserName}
              readOnly={true}
              hidden
            />
            <button type="submit">Submit feedback</button>
            <a href={issueUrl}>or submit as GitHub issue</a>
          </form>
        </div>
      </Container>
    </>
  );
}

export default GoodBye;
