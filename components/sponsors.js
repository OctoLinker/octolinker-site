import Code from "./code";
import { trackEvent } from "../lib/analytics";

export default function Sponsors() {
  return (
    <>
      <style jsx>{`
        .sponsor-boxes {
          display: grid;
          grid-column-gap: 35px;
        }

        @media only screen and (min-width: 768px) {
          .sponsor-boxes {
            grid-template-columns: repeat(2, 50%);
          }
        }

        .octofriends {
          transition: all 180ms ease-in-out;
        }

        .octofriends:hover {
          transform: scale(1.05);
        }

        .octofriends {
          width: 120px;
          height: 120px;
          margin: auto;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position-x: center;
          background-size: contain;
        }

        @media only screen and (min-width: 768px) {
          .octofriends {
            width: 200px;
            height: 200px;
            margin-bottom: 20px;
          }
        }
      `}</style>
      <div className="sponsor-boxes">
        <div>
          <a
            href="https://zeit.co"
            onClick={trackEvent.bind(null, {
              action: "click",
              category: "sponsor",
              label: "logo-zeit"
            })}
          >
            <div
              className="octofriends"
              style={{
                backgroundColor: "#000",
                backgroundImage: "url(static/zeit.png)",
                backgroundPositionY: "54%",
                backgroundSize: "65%"
              }}
            />
          </a>
          <p>
            <a
              href="https://zeit.co/"
              onClick={trackEvent.bind(null, {
                action: "click",
                category: "sponsor",
                label: "link-zeit"
              })}
            >
              ZEIT Now
            </a>{" "}
            enables OctoLinker on demand horizontal scaling across many regions in a
            serverless environment. I worked with other cloud vendors before,
            but none of them was nearly as easy to use as ZEIT now. It’s a
            really impressive and satisfying developer experience! 
          </p>
        </div>
        <div>
          <a
            href="https://redisgreen.net"
            onClick={trackEvent.bind(null, {
              action: "click",
              category: "sponsor",
              label: "logo-redisgreen"
            })}
          >
            <div
              className="octofriends"
              style={{
                backgroundColor: "#5f8834",
                backgroundImage: "url(static/redisgreen.png)",
                backgroundPositionY: "53%",
                backgroundSize: "80%"
              }}
            />
          </a>
          <p>
            We leverage{" "}
            <a
              href="https://redisgreen.net"
              onClick={trackEvent.bind(null, {
                action: "click",
                category: "sponsor",
                label: "link-redisgreen"
              })}
            >
              RedisGreen
            </a>{" "}
            high performance as a caching layer to reduce network calls to
            third-party providers such as <Code>npmjs.com</Code>,{" "}
            <Code>getcomposer.org</Code>, <Code>rubygems.org</Code> and more.
            RedisGreen supports OctoLinker with four dedicated servers and high
            availability in four regions.
          </p>
        </div>
      </div>
    </>
  );
}
