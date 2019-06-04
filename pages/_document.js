import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/analytics";

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
          <meta property="og:url" content="https://octolinker.now.sh" />
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
            content="https://octolinker.now.sh/static/octolinker-og-screenshot.png"
          />
          <meta
            name="twitter:image"
            content="https://octolinker.now.sh/static/octolinker-og-screenshot.png"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="image_src"
            href="https://octolinker.now.sh/static/octolinker-og-image.png"
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
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('set', 'anonymizeIp', true);
                  gtag('config', '${GA_TRACKING_ID}');
                `
            }}
          />
        </Head>
        <style jsx global>{``}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
