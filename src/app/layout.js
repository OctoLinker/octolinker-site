import "./globals.css";

const PLAUSIBLE_ENABLED = process.env.PLAUSIBLE_ENABLED || false
const plausibleSnippet = 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>OctoLinker &mdash; Links together, what belongs together.</title>
        <meta
          name="description"
          content="Browser extension for GitHub which turns language-specific module-loading statements like include, require or import into links."
        />
        <meta name="google-site-verification" content="v3K92ouLbxqnD8jtbkkdm4LgD5g4uNGW2KYMBwUmFxI" />

        {PLAUSIBLE_ENABLED && (<script async defer data-domain="octolinker.vercel.app" src="https://plausible.io/js/plausible.js" />)}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: plausibleSnippet
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
