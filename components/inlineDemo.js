import { trackEvent } from "../lib/analytics";

export default function InlineDemo() {
  return (
    <>
      <style jsx>
        {`
          a.octolinker-link {
            color: inherit;
          }

          a.octolinker-link:hover {
            text-decoration: none;
          }

          body.octolinker-debug .octolinker-link {
            background-color: rgba(255, 0, 255, 0.2);
            border: 1px solid rgb(255, 0, 255);
          }

          .octolinker-link:after {
            content: "●";
            position: absolute;
            left: -4px;
            top: -1px;
            width: 3px;
            transition: color 0.2s ease-out, color 450ms ease-in;
          }

          .octolinker-link[href] {
            cursor: pointer;
          }

          .octolinker-link[href]:hover {
            text-decoration: underline !important;
          }

          .octolinker-link:not([href]):after {
            color: rgba(0, 0, 0, 0);
          }

          .octolinker-link[href]:after {
            color: rgba(255, 0, 255, 0.2);
          }

          .octolinker-link[href]:hover:after {
            color: rgba(255, 0, 255, 0.8);
            cursor: default;
          }

          /* Fix line indicator for issue code blocks */
          div.highlight {
            position: relative;
          }

          .highlight .octolinker-link:after {
            top: inherit;
          }

          /* Live demo https://octolinker-demo.now.sh */

          .octospotlight:after {
            color: rgba(255, 0, 255, 0.8);
          }

          .octospotlight-inner:hover {
            text-decoration: underline;
          }

          .octospotlight-inner {
            display: inline-block;
            position: relative;
          }

          .octospotlight-dot {
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -4px 0 0 -4px;
            border-radius: 50%;
            height: 8px;
            width: 8px;
            z-index: 1000;
            animation: octoSpotlightPulse 2s infinite;
          }

          @keyframes octoSpotlightPulse {
            0% {
              transform: scale(1);
              background-color: rgba(255, 0, 255, 0.6);
            }
            70% {
              transform: scale(8);
              background-color: rgba(255, 0, 255, 0);
            }
            to {
              transform: scale(1);
              background-color: rgba(255, 0, 255, 0);
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .inlineDemo {
            position: absolute;
            top: 64px;
            left: 25px;
            text-align: left;
            background: white;
            border: 12px solid white;
            border-radius: 50%;
            width: 422px;
            height: 422px;
            overflow: hidden;
            display: grid;
            align-items: center;
            box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
          }

          @media only screen and (min-width: 920px) {
            .inlineDemo {
              top: 138px;
            }
          }

          .octospotlight-inner {
            display: inline-block;
          }

          table {
            margin-left: -20px;
          }

          td {
            padding: 3px 0;
          }

          .blob-code-inner,
          .blob-num {
            font-size: 16px;
          }

          .blob-num {
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
            color: rgba(27, 31, 35, 0.3);
            cursor: pointer;
            font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
              Courier, monospace;
            line-height: 20px;
            min-width: 50px;
            padding-left: 10px;
            padding-right: 10px;
            text-align: right;
            user-select: none;
            vertical-align: top;
            white-space: nowrap;
            width: 1%;
          }

          .blob-num:before {
            content: attr(data-line-number);
          }

          .blob-code-inner {
            color: #24292e;
            font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
              Courier, monospace;
            overflow: visible;
            white-space: pre;
            word-wrap: normal;
          }
          .blob-code {
            line-height: 20px;
            padding-left: 10px;
            padding-right: 10px;
            position: relative;
            vertical-align: top;
          }

          .pl-k {
            color: #d73a49;
          }

          .pl-c1 {
            color: #005cc5;
          }
          .pl-pds,
          .pl-s {
            color: #032f62;
          }
        `}
      </style>
      <div className="inlineDemo">
        <table
          className="highlight tab-size js-file-line-container"
          data-tab-size="2"
        >
          <tbody>
            <tr>
              <td
                id="L1"
                className="blob-num js-line-number"
                data-line-number="1"
              />
              <td id="LC1" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                {<span className="pl-c1">parse</span>}{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L1"
                      })}
                      href="https://nodejs.org/api/url.html"
                    >
                      url
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L2"
                className="blob-num js-line-number"
                data-line-number="2"
              />
              <td id="LC2" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                {<span className="pl-c1">json</span>}{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L2"
                      })}
                      href="https://octolinker-demo.now.sh/vercel/micro"
                    >
                      micro
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L3"
                className="blob-num js-line-number"
                data-line-number="3"
              />
              <td id="LC3" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">pMap</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L3"
                      })}
                      href="https://octolinker-demo.now.sh/sindresorhus/p-map"
                    >
                      p-map
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L4"
                className="blob-num js-line-number"
                data-line-number="4"
              />
              <td id="LC4" className="blob-code blob-code-inner js-file-line" />
            </tr>
            <tr>
              <td
                id="L5"
                className="blob-num js-line-number"
                data-line-number="5"
              />
              <td id="LC5" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">go</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L5"
                      })}
                      href="https://octolinker-demo.now.sh/OctoLinker/api/blob/836b392e1fd874c2038e6e92c2a86fae8142ab06/src/go.js#LO6"
                    >
                      <div className="octospotlight-inner">
                        ./go
                        <div className="octospotlight-dot" />
                      </div>
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L6"
                className="blob-num js-line-number"
                data-line-number="6"
              />
              <td id="LC6" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">java</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L6"
                      })}
                      href="https://octolinker-demo.now.sh/OctoLinker/api/blob/836b392e1fd874c2038e6e92c2a86fae8142ab06/src/java/index.js"
                    >
                      ./java
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L7"
                className="blob-num js-line-number"
                data-line-number="7"
              />
              <td id="LC7" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">ping</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L7"
                      })}
                      href="https://octolinker-demo.now.sh/OctoLinker/api/blob/836b392e1fd874c2038e6e92c2a86fae8142ab06/src/ping.js"
                    >
                      ./ping
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L8"
                className="blob-num js-line-number"
                data-line-number="8"
              />
              <td id="LC8" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">registries</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L8"
                      })}
                      href="https://octolinker-demo.now.sh/OctoLinker/api/blob/836b392e1fd874c2038e6e92c2a86fae8142ab06/src/registries/index.js"
                    >
                      ./registries
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L9"
                className="blob-num js-line-number"
                data-line-number="9"
              />
              <td id="LC9" className="blob-code blob-code-inner js-file-line" />
            </tr>
            <tr>
              <td
                id="L10"
                className="blob-num js-line-number"
                data-line-number="10"
              />
              <td id="LC10" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">log</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L10"
                      })}
                      href="https://octolinker-demo.now.sh/OctoLinker/api/blob/836b392e1fd874c2038e6e92c2a86fae8142ab06/src/utils/log.js"
                    >
                      ./utils/log
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L11"
                className="blob-num js-line-number"
                data-line-number="11"
              />
              <td id="LC11" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">cache</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L11"
                      })}
                      href="https://octolinker-demo.now.sh/OctoLinker/api/blob/836b392e1fd874c2038e6e92c2a86fae8142ab06/src/utils/cache.js"
                    >
                      ./utils/cache
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
            <tr>
              <td
                id="L12"
                className="blob-num js-line-number"
                data-line-number="12"
              />
              <td id="LC12" className="blob-code blob-code-inner js-file-line">
                <span className="pl-k">const</span>{" "}
                <span className="pl-c1">tracking</span>{" "}
                <span className="pl-k">=</span>{" "}
                <span className="pl-c1">require</span>(
                <span className="pl-s">
                  <span className="pl-pds">'</span>
                  <span>
                    <a
                      data-pjax="true"
                      className="octolinker-link"
                      onClick={trackEvent.bind(null, {
                        action: "click",
                        category: "inline-demo",
                        label: "L12"
                      })}
                      href="https://octolinker-demo.now.sh/OctoLinker/api/blob/836b392e1fd874c2038e6e92c2a86fae8142ab06/src/utils/tracking.js"
                    >
                      ./utils/tracking
                    </a>
                  </span>
                  <span className="pl-pds">'</span>
                </span>
                );
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
