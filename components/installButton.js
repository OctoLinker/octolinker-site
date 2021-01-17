import Button from "./button";
import Bowser from "bowser";

export default function Install({ children, compact }) {
  const supported = {
    chrome: {
      eventName: 'install: chrome',
      text: "Install for Google Chrome",
      url:
        "https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp"
    },
    firefox: {
      eventName: 'install: firefox',
      text: "Install for Mozilla Firefox",
      url: "https://addons.mozilla.org/en-US/firefox/addon/octolinker/"
    },
    opera: {
      eventName: 'install: opera',
      text: "Install for Opera",
      url: "https://addons.opera.com/en/extensions/details/octolinker/"
    },
    'microsoft edge': {
      eventName: 'install: edge',
      text: "Install for Microsoft Edge",
      url: "https://microsoftedge.microsoft.com/addons/detail/lbbanfffjfmfdahnfbklminikafhcjjb"
    },
    'safari': {
      eventName: 'install: safari',
      text: "Install for Safari",
      url: "https://apps.apple.com/app/octolinker/id1549308269"
    }
  };

  const browser = Bowser.getParser(window.navigator.userAgent);
  const details = supported[browser.getBrowser().name.toLowerCase()] || supported.chrome;
  const buttonUrl = details.url;
  const buttonLabel = compact ? "Install" : details.text;

  return (
    <Button
      compact={compact}
      href={buttonUrl}
      onClick={function() {
        window.plausible(details.eventName)
      }}
    >
      {buttonLabel}
    </Button>
  );
}
