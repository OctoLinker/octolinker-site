import Document, { Html, Head, Main, NextScript } from "next/document";

const PLAUSIBLE_ENABLED = process.env.PLAUSIBLE_ENABLED || false
const plausibleSnippet = 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }';

export default class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Browser extension for GitHub which turns language-specific module-loading statements like include, require or import into links."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@octolinker" />
          <meta
            name="twitter:title"
            content="OctoLinker &mdash; Links together, what belongs together."
          />
          <meta name="google-site-verification" content="v3K92ouLbxqnD8jtbkkdm4LgD5g4uNGW2KYMBwUmFxI" />
          <meta property="og:url" content="https://octolinker.vercel.app" />
          <meta property="og:site_name" content="OctoLinker" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="OctoLinker &mdash; Links together, what belongs together."
          />
          <meta
            property="og:description"
            content="Browser extension for GitHub which turns language-specific module-loading statements like include, require or import into links."
          />
          <meta
            property="og:image"
            content="https://octolinker.vercel.app/static/octolinker-og-screenshot.png"
          />
          <meta
            name="twitter:image"
            content="https://octolinker.vercel.app/static/octolinker-og-screenshot.png"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="image_src"
            href="https://octolinker.vercel.app/static/octolinker-og-image.jpg"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link href="static/main.css" rel="stylesheet" type="text/css" />
          <link href="/static/main.css" rel="stylesheet" type="text/css" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          {PLAUSIBLE_ENABLED && (<script async defer data-domain="octolinker.vercel.app" src="https://plausible.io/js/plausible.js" />)}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: plausibleSnippet
            }}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `if ( ! window.location.hash ) {
                history.replaceState('', document.title, window.location.pathname);
              }`
            }}
          />
        <style jsx global>{``}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
