import Button from "./button";
import Bowser from "bowser";
import { trackEvent } from "../lib/analytics";

export default function Install({ children, trackingLabel, compact }) {
  const supported = {
    chrome: {
      text: "Install for Google Chrome",
      url:
        "https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp"
    },
    firefox: {
      text: "Install for Mozilla Firefox",
      url: "https://addons.mozilla.org/en-US/firefox/addon/octolinker/"
    },
    opera: {
      text: "Install for Opera",
      url: "https://addons.opera.com/en/extensions/details/octolinker/"
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
        trackEvent({
          action: "click",
          category: "install",
          label: trackingLabel,
          value: buttonUrl
        });
      }}
    >
      {buttonLabel}
    </Button>
  );
}
