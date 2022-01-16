import dynamic from 'next/dynamic';
import Container from "./container";
import Button from "./button";
import Code from "./code";
import Image from 'next/image';

const InstallButton = dynamic(import ('./installButton'),{ssr:false});

export default function Nav() {
  return (
    <div className="hero">
      <style jsx>
        {`
          .hero {
            text-align: center;
            padding-top: 3rem;
          }

          .hero h1 {
            padding-top: 1.2rem;
            line-height: 2.3rem;
          }

          .hero p {
            margin: 1rem auto;
            max-width: 350px;
            line-height: 1.4rem;
            color: #808493;
          }

          .logos {
            display: flex;
            gap: 12px;
            margin-top: 18px;
            margin-bottom: -4px;
            justify-content: center;
          }
          @media only screen and (min-width: 768px) {
            .hero p {
              font-size: 1.4rem;
              font-weight: 300;
              line-height: 2.1rem;
              max-width: 550px;
              margin: 0 auto;
            }
          }
          .hero strong {
            color: #373a3c;
          }
          @media only screen and (max-width: 767px) {
            .hero {
              margin: 0;
            }
            .hero h1 {
              line-height: 2rem;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .hero .button {
            margin-top: 8px;
            margin-right: 10px;
          }

          @media only screen and (min-width: 768px) {
            .hero .button {
              margin: 20px 6px 12px 6px;
            }
          }
        `}
      </style>
      <img src="static/octolinker.png" height="186" />
      <h1>
        {" "}
        <strong>OctoLinker</strong> —{" "}
        <span>
          Links together, <nobr>what belongs together.</nobr>
        </span>
      </h1>
      <p>
        OctoLinker is a browser extension for GitHub, that turns
        language-specific statements like <Code>include</Code>{" "}
        <Code>require</Code> or <Code>import</Code> into links.
      </p>
      <p>
        <InstallButton />
        <Button href="#how-it-works">
          Learn how it works
        </Button>
      </p>
      <div className="logos">
          <a
            href="https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp"
            onClick={function() { window.plausible("install: chrome")}}
            rel="nofollow"
          >
            <Image alt="Chrome Web Store" src="/static/chrome.png" width="28" height="28" />
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/octolinker/"
            onClick={function() { window.plausible("install: mozilla")}}
            rel="nofollow"
          >
            <Image alt="Mozilla Add-ons Store" src="/static/firefox.png" width="28" height="28" />
          </a>
          <a
            href="https://apps.apple.com/app/octolinker/id1549308269"
            onClick={function() { window.plausible("install: safari")}}
            rel="nofollow"
          >
            <Image alt="Mac App Store" src="/static/safari.png" width="28" height="28" />
          </a>
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/lbbanfffjfmfdahnfbklminikafhcjjb"
            onClick={function() { window.plausible("install: edge")}}
            rel="nofollow"
          >
            <Image alt="Microsoft Store" src="/static/edge.png" width="28" height="28" />
          </a>
          <a
            href="https://addons.opera.com/en/extensions/details/octolinker/"
            onClick={function() { window.plausible("install: opera")}}
            rel="nofollow"
          >
            <Image alt="Opera Add-ons Store" src="/static/opera.png" width="28" height="28" />
          </a>
        </div>

      <small>Trusted by over 30,000 developers</small>
    </div>
  );
}
