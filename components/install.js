import dynamic from 'next/dynamic';
import { trackEvent } from "../lib/analytics";

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
      `}</style>
      <p>
        OctoLinker is a browser extension and available on{" "}
        <a
          href="https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp"
          onClick={trackEvent.bind(null, {
            action: "click",
            category: "install",
            label: "store-chrome"
          })}
          rel="nofollow"
        >
          <nobr>Chrome Web Store</nobr>
        </a>
        ,{" "}
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/octolinker/"
          onClick={trackEvent.bind(null, {
            action: "click",
            category: "install",
            label: "store-mozilla"
          })}
          rel="nofollow"
        >
          <nobr>Mozilla Add-ons Store</nobr>
        </a>
        ,{" "}
        <a
          href="https://microsoftedge.microsoft.com/addons/detail/lbbanfffjfmfdahnfbklminikafhcjjb"
          onClick={trackEvent.bind(null, {
            action: "click",
            category: "install",
            label: "store-edge"
          })}
          rel="nofollow"
        >
          <nobr>Microsoft Store</nobr>
        </a>
        {" and "}
        <a
          href="https://addons.opera.com/en/extensions/details/octolinker/"
          onClick={trackEvent.bind(null, {
            action: "click",
            category: "install",
            label: "store-opera"
          })}
          rel="nofollow"
        >
          <nobr>Opera Add-ons Store</nobr>
        </a>.
        <br />
        Install and enhance your GitHub experience.
      </p>
      <InstallButton trackingLabel="install-footer" />
      <div className="install-count">
        <small>Trusted by over 25,000 developers</small>
      </div>
    </>
  );
}
