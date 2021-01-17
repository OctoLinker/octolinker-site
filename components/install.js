import dynamic from 'next/dynamic';
import Image from 'next/image';
const InstallButton = dynamic(import ('./installButton'),{ssr:false});

export default function Install() {
  return (
    <>
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          p {
            margin: 1rem auto;
            max-width: 600px;
          }
        }

        @media only screen and (max-width: 768px) {
          .install-count {
            padding-left: 1em;
          }
        }

        .logos {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        @media only screen and (min-width: 768px) {
          .logos {
            justify-content: center;
          }
        }
      `}</style>
      <p>
        OctoLinker is a browser extension.         Install and enhance your GitHub experience.
        <div className="logos">
          <a
            href="https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp"
            onClick={function() { window.plausible("install: chrome")}}
            rel="nofollow"
          >
            <Image alt="Chrome Web Store" src="/static/chrome.png" width="48" height="48" />
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/octolinker/"
            onClick={function() { window.plausible("install: mozilla")}}
            rel="nofollow"
          >
            <Image alt="Mozilla Add-ons Store" src="/static/firefox.png" width="48" height="48" />
          </a>
          <a
            href="https://apps.apple.com/app/octolinker/id1549308269"
            onClick={function() { window.plausible("install: safari")}}
            rel="nofollow"
          >
            <Image alt="Mac App Store" src="/static/safari.png" width="48" height="48" />
          </a>
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/lbbanfffjfmfdahnfbklminikafhcjjb"
            onClick={function() { window.plausible("install: edge")}}
            rel="nofollow"
          >
            <Image alt="Microsoft Store" src="/static/edge.png" width="48" height="48" />
          </a>
          <a
            href="https://addons.opera.com/en/extensions/details/octolinker/"
            onClick={function() { window.plausible("install: opera")}}
            rel="nofollow"
          >
            <Image alt="Opera Add-ons Store" src="/static/opera.png" width="48" height="48" />
          </a>
        </div>
      </p>
      <InstallButton />
      <div className="install-count">
        <small>Trusted by over 25,000 developers</small>
      </div>
    </>
  );
}
