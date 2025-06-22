import Image from "next/image";
import Head from 'next/head'
import { Github, Users, Star, Globe, Rocket, Code, Link as LinkIcon, Award, Box, ArrowRight } from 'lucide-react';
import cn from 'classnames'
import { getImageProps } from 'next/image'

const seoTitle = 'OctoLinker — Links together, what belongs together';
const seoDesc = 'Navigate Github rojects, files and dependencies faster with OctoLinker'

function getBackgroundImage(srcSet = '') {
  const imageet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageet})`
}

export default function Home() {

  const stats = [
    {
      icon: Users,
      value: '30k+',
      label: 'Daily Users',
      color: 'bg-purple-500'
    },
    {
      icon: LinkIcon,
      value: '7M+',
      label: 'Monthly Links',
      color: 'bg-blue-500'
    },
    {
      icon: Star,
      value: '5.0',
      label: 'Rating',
      color: 'bg-yellow-500'
    },
    {
      icon: Code,
      value: '40+',
      label: 'Contributors',
      color: 'bg-green-500'
    },
    {
      icon: Rocket,
      value: '9 years',
      label: 'Active development',
      color: 'bg-green-500'
    }
  ];


  const timelineEvents = [
    {
      "date": "2013-12-27",
      "title": "Initial release",
      "content": (
        <div>
          <p>OctoLinker was <strong>initially released</strong> as GitHub Linker.
          </p>
          <p>At launch, it just linked dependencies in a <code>package.json</code>. It supported <strong>44,930 npm packages</strong> (nearly all of the available packages at the time). Yes, the npm registry was that small back then!</p>
        </div>
      )
    },
    {
      "date": "2014-06-16",
      "title": "Link require statements",
      "content": (
        <div>
          Added support for linking <code>require()</code> statements to their related files or corresponding GitHub repositories, enabling users to explore packages directly from the source code.
        </div>
      )
    },
    {
      "date": "2014-08-24",
      "title": "Optimize mapping file creation",
      "content": (
        <div>
          As the npm registry grew, so did the mapping file. By now it contained <strong>over 75,000 npm packages</strong>. Crawling npm became increasingly challenging, and generating the file entirely in memory was no longer feasible. The solution? Streaming.
        </div>
      )
    },
    {
      "date": "2014-09-25",
      "title": "PHP Composer support",
      "logos": [
        { src: "/composer.png", alt: "Composer logo" },
      ],
      "content": (
        <p>
          This was the project's first code contribution, introducing <strong>support for a new package manager</strong>, made by <a rel="noopener noreferrer" href="https://github.com/barryvdh">@barryvdh</a>.
        </p>
      )
    },
    {
      "date": "2015-08-24",
      "title": "Live-Resolver API",
      "badge": "Huge improvment",
      "content": (<>
        <p>
          Earlier versions relied on large static lists for each supported registry bundled with the extension. This approach was not scalable and as it also impacted the browser performance.</p>
        <p>The new <strong>Live-Resolver API</strong> was introduced to resolve package links in real-time, ensuring up-to-date links and improved performance.
        </p></>)
    },
    {
      "date": "2015-08-27",
      "title": "Growing user base 🎉",
      "content": (
        <p>
          Surpassed <strong>6,000 users</strong> after 1.5 years
        </p>)
    },
    {
      "date": "2015-12-09",
      "title": "Renaming to OctoLinker",
      "image": { src: "/octolinker.png", alt: "OctoLinker logo" },
      "content": (
        <p>Forced to rename 'GitHub Linker' due to legal reasons, <strong>OctoLinker was born.</strong> Thanks Christian Kahl for this amazing logo!</p>
      )
    },

    {
      "date": "2016-05-11",
      "title": "Support for Ruby",
      "logos": [{ src: "/rubygems.png", alt: "rubygems logo" }, { src: "/ruby.png", alt: "Ruby logo" }],
      "content": (<p>Add support for <code>require</code> statements and <code>requirements.txt</code></p>)
    },
    {
      "date": "2016-05-15",
      "new_contributor": "josephfrazier"
    },
    {
      "date": "2016-06-21",
      "new_browser": "Firefox",
    },
    {
      "date": "2016-08-02",
      "title": "More language support 🚀",
      "logos": [
        { src: "/python.png", alt: "Python logo" },
        { src: "/rust.png", alt: "rust logo" },
        { src: "/docker.png", alt: "Docker logo" },
        { src: "/vim.png", alt: "vimrc logo" },
        { src: "/typescript.png", alt: "typescript logo" },
      ],
      "content": "Added support for Python, Rust, Docker, Vim, and TypeScript."
    },
    {
      "date": "2016-09-01",
      "title": "Still Growing 🎉",
      "badge": "Millstone",
      "content": (
        <div>10,000 active users.</div>)
    },
    {
      "date": "2016-10-19",
      "title": ".NET Core support",
      "logos": [
        { src: "/dotnet.png", alt: ".NET logo" }
      ],
      "content": (
        <div>Added support for .NET Core <code>project.json</code> files.</div>)
    },
    {
      "date": "2016-12-04",
      "title": "README and issues support",
      "content": "Added support to link dependencies from Readme's and Issues."
    },
    {
      "date": "2017-01-18",
      "title": "Stickers",
      "image": { src: "/stickers.jpg", alt: "OctoLinker sticker", width: 600, height: 450 },
      "content": (
        <div>Fresh from the press, 360 OctoLinker stickers</div>)
    },
    {
      "date": "2017-01-31",
      "title": "Go support",
      "logos": [{ src: "/go.png", alt: "GO logo" }],
      "content": (
        <div>Added support for navigation Go dependecies</div>)
    },
    {
      "date": "2017-03-28",
      "title": "More language support",
      "logos": [
        { src: "/haskell.png", alt: "haskell logo" },
        { src: "/sass.png", alt: "sass logo" },
        { src: "/less.png", alt: "less logo" }
      ],
      "content": (
        <div>Added support for Haskell, Sass, and LessCSS.</div>)
    },
    {
      "date": "2017-11-09",
      "title": "Java support",
      "logos": [{ src: "/java.png", alt: "java logo" }],
      "content": (
        <div>Added Java core class linking, including documentation support.</div>)
    },
    {
      "date": "2017-11-10",
      "new_contributor": "xt0rted",
    },
    {
      "date": "2018-07-20",
      "title": "Testing made easy",
      "content": (
        <div>
          As OctoLinker grew in complexity, we needed a way to ensure that changes made by GitHub didn't break OctoLinker. The solution we came up with is <strong>unbelievable simple</strong>. It is as simple as adding a code comment.

          <div className="text-xs md:text-sm bg-gray-700 font-mono my-6 py-3 pl-5 sm:-mx-6">
            <div className="text-gray-400 italic">//@OctoLinker Resolve(https://nodejs.org/api/fs.html)</div>
            <div className="text-gray-200"><span className="text-purple-300">require</span>(<span className="text-blue-200">'fs'</span>)</div>
          </div>

          This is a test that checks if OctoLinker can resolve the <code>require('fs')</code> statement to the <code>fs.html</code> documentation page on the Node.js website. If you want to learn more about this, check out this <a href="https://stefanbuck.com/blog/how-octolinker-runs-automate-e2e-tests-using-puppeteer" rel="noopener noreferrer" >blog post</a> where I went into more detail about how we do end-to-end testing works.
        </div>)
    },
    {
      "date": "2018-08-13",
      "title": "Pull Requests support",
      "image": { src: "/pullrequest.png", alt: "Pull Request", width: 1838, height: 944 },
      "content": (
        <div>Link dependencies in Pull Requests to make you the world's fastest code reviewer </div>)
    },
    {
      "date": "2019-06-06",
      "title": "Major rework of link resolution",
      "content": (
        <><p>Major rewrite to resolve links during initial page load, allowing to insert actual links into the DOM instead of just listening to click events. This also meant to upgrade our resolver API to handle the new load. Luckily we had two amazing sponsors.</p>
          <div className="flex flex-wrap gap-6 flex-direction-column ">
            <a href="https://vercel.com" rel="noopener noreferrer" className="w-1/3 bg-black px-3 py-2">
              <Image src="/vercel.png" alt="Vercel logo" width={350} height={93}></Image>
            </a>
            <a href="https://memetria.com" rel="noopener noreferrer" className="w-1/3 py-2">

              <Image src="/memetria.png" alt="memetria logo" width={350} height={85}></Image>
            </a>
          </div>
        </>)
    },
    {
      "date": "2019-12-27",
      "title": "6-year anniversary 🎈",
      "content": (
        <div><strong>25,000 active users</strong> and 4,000 GitHub stars</div>)
    },
    {
      "date": "2020-01-13",
      "new_browser": "Edge"
    },
    {
      "date": "2020-04-12",
      "title": "Hovercard",
      "image": { src: "/hovercard.png", alt: "Hovercard", width: 1916, height: 800 },
      "content": (
        <div>Added hovercards for quick dependency insights, allowing users to view package details without leaving the page.</div>)
    },
    {
      "date": "2020-05-04",
      "title": "API load",
      "content": (
        <div>
          <p>Our RESTful API <strong>resolved 1.8 million links</strong> each week or three links per second.
          </p>
        </div>)
    },
    {
      "date": "2020-08-19",
      "title": "GitHub Actions support",
      "logos": [{ src: "/github-actions.png", alt: "GitHub Actions logo" }],
      "content": (
        <div>Support linking of GitHub Actions defined in workflow YAML files, making it easier to explore actions directly from any workflow file.</div>)
    },
    {
      "date": "2021-01-12",
      "new_contributor": "fregante",
    },
    {
      "date": "2021-01-17",
      "new_browser": "Safari",
    },
    {
      "date": "2021-04-29",
      "title": "Arctic Code Vault",
      "content": (
        <div>OctoLinker selected as one of the <strong>17,000 Greatest Hits</strong> for the <a href="https://youtu.be/fzI9FNjXQ0o" rel="noopener noreferrer">GitHub Archive Project</a>.</div>)
    },
    {
      "date": "2022-04-26",
      "title": "Chrome Web Store badge",
      "image": { src: "/chrome_badge.png", alt: "Chrome Web Store badge", width: 1318, height: 528 },
      "content": (
        <div>Received <strong>Established Publisher</strong> badge on Chrome Web Store.</div>)
    },
    {
      "date": "2023-05-08",
      "title": "The End",
      "content": (
        <div>
          On May 8, 2023, GitHub released a new code view that broke OctoLinker. Despite various platform updates over the years, we managed to keep it running for nine years. Unfortunately, this latest change has made it impossible to maintain its functionality.</div>)
    }
  ]



  return (
    <div>
      <Head>
        <title>{seoTitle}</title>
        <meta name='twitter:title' content={seoTitle} />
        <meta
          name="twitter:description"
          content={seoDesc}
        />
        <meta key="og-title" property="og:title" content={seoTitle} />
        <meta
          key="og-description"
          property="og:description"
          content={seoDesc}
        />
      </Head>

      <section className="container max-w-screen-lg mx-auto pb-12 pt-12 grid justify-center text-center">
        <Image className='mx-auto pb-2' src="/octolinker.png" alt="OctoLinker logo" width={325 / 2} height={303 / 2} />
        <div className="text-5xl sm:text-7xl font-bold">
          OctoLinker
        </div>
        <div className="text-base sm:text-lg">
          Revolutionizing GitHub Navigation for 9 Years
        </div>
      </section>

      <section className="hidden container max-w-screen-lg mx-auto pb-4 sm:grid justify-center">
        <div className="w-full rounded-3xl backdrop-blur-md bg-blue-100/30 border sm:p-5 drop-shadow-lg">
          <div className="rounded-2xl bg-white h-full drop-shadow-md border-2 border-gray-100 overflow-hidden">
            <Image className='mx-auto max-w-screen-md' src="/screenshot.png" alt="OctoLinker screenshot" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>
      <Image className='sm:hidden mx-auto max-w-screen-md' src="/screenshot.png" alt="OctoLinker screenshot" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

      <section className="container max-w-screen-md mx-auto mt-12 gap-4 grid px-4">
        <p>
          OctoLinker <strong>was a browser extension</strong> that enhanced GitHub by making dependencies and module imports clickable links. It allowed developers to navigate repositories more efficiently by turning package names into links.</p>
        <p>

          However, due to changes in GitHub, OctoLinker is <strong>no longer functional</strong>. Despite various platform updates over the years, we managed to <strong>keep it running for nine years</strong>, but this latest change has made it impossible to maintain its functionality.</p><p>

          Thank you to everyone who supported and used OctoLinker over the years. It has been an incredible journey, and I’m proud of what we’ve achieved together.</p><p>

          Below, you’ll find a<strong> timeline highlighting key moments</strong> from the past nine years of the project.
        </p>
      </section>

      <div>
        {/* <div className="relative py-20 px-4 bg-gradient-to-b to-blue-100 from-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-screen-md mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border bg-gradient-to-b from-blue-50 to-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <stat.icon className="w-8 h-8" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-sm">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="pt-6 bg-gradient-to-b from-blue-100 to-white "> */}

        <div className="mt-12 mb-12">
          <Image className='mx-auto' src="/mascot-down.png" alt="OctoLinker down" width={410 / 2} height={210 / 2} />
        </div>
        {/* </div> */}
        <div className="max-w-5xl mt-24 mx-auto">

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">

            {timelineEvents.map((item, index) => {

              const isOdd = index % 2;

              const classNames2 = cn('hidden md:block', {
                'timeline-start': isOdd,
                'timeline-end': !isOdd,
              })
              const classNames3 = cn('mb-8', {
                'md:-mt-10': index !== 0,
                'timeline-start': !isOdd,
                'timeline-end': isOdd,
              })

              if (item.new_contributor) {

                item.title = "";
                item.content = (
                  <div>
                    <a href={`https://github.com/${item.new_contributor}`} rel="noopener noreferrer">@{item.new_contributor}</a> joined as a core contributor.
                  </div>
                )
                item.images = (
                  <a href={`https://github.com/${item.new_contributor}`} rel="noopener noreferrer">
                    <img src={`http://github.com/${item.new_contributor}.png`} width={80} height={80} className="rounded-full border border-gray-300" alt="" />
                  </a>)
              }

              if (item.new_browser) {
                item.title = (
                  <>
                    <Image className="inline-block mr-1" src={`/${item.new_browser.toLocaleLowerCase()}.png`} alt={`${item.new_browser} logo`} width={24} height={24} /> {item.new_browser} release
                  </>
                );
                item.content = `OctoLinker is now available for ${item.new_browser}.`
              }

              if (item.logos) {

                item.images = (<div className="logos flex flex-wrap gap-3">
                  {item.logos.map((logo, index) => {

                    const { props: { srcSet }, } = getImageProps({ alt: "", width: 200, height: 200, src: logo.src })
                    const backgroundImage = getBackgroundImage(srcSet)
                    const style = { backgroundImage }

                    return (
                      <div key={index} className="size-12 relative bg-contain bg-center bg-no-repeat" style={style}></div>
                    )
                  })}
                </div>)
              }

              if (item.image) {
                item.images = (
                  <div className="relative md:mx-auto">
                    <Image src={item.image.src} alt={item.image.alt} width={item.image.width || 200} height={item.image.height || 200} />
                  </div>
                )
              }


              return (
                <li key={index}>
                  <div className="timeline-middle h-0 relative z-10">
                    <span className="bg-octolinker-900 flex size-5 items-center justify-center rounded-full border-white dark:border-black border-4 relative z-10"></span>
                  </div>
                  <div className={classNames2}>
                    <div className="text-sm font-normal text-gray-400 -mt-2">{new Date(item.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}</div>
                  </div>
                  <div className={classNames3}>
                    <div className="md:card">
                      <div className="card-body gap-4">
                        <div>
                          <div className="md:hidden text-sm font-normal text-gray-400 -mt-2">{new Date(item.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                          })}</div>
                          {item.badge && <span className="badge badge-primary">{item.badge}</span>}
                          {item.title && <h5 className="card-title text-lg">{item.title}</h5>}
                        </div>
                        {item.content}
                        {item.images}
                      </div>
                    </div>
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <hr className="border-4 bg-octolinker-100 blur-xs z-0" />
                  )}
                </li>
              )
            })}
          </ul>

          <div className="mt-2">
            <Image className='mx-auto' src="/mascot-tentacle.png" alt="OctoLinker Good bye" width={316 / 2} height={202 / 2} />
          </div>
          <div className="pt-12 pb-24 container max-w-screen-md mx-auto gap-4 flex flex-col px-4">
            <h2 className="text-2xl">What's next?</h2>
            <p>
              There are plenty other great browser extensions out there aiming to improve your GitHub experience. You can find some of them on the <a href="https://stefanbuck.com/awesome-browser-extensions-for-github"><strong>Awesome Browser Extensions for GitHub</strong></a> list.
            </p>
            <p>
              <a href="https://stefanbuck.com/" rel="noopener noreferrer" >Stefan Buck</a>, the creator of OctoLinker, is now working on <a href="https://pullrequestbadge.com" rel="noopener noreferrer"><strong>Pull Request Badge</strong></a> GitHub App, contininung his passion for consistency and productivity on GitHub.
            </p>

            <a className="no-underline" href="https://pullrequestbadge.com" rel="noopener noreferrer">
              <span className="drop-shadow-lg -mt-1.5 font-semibold text-white leading-tight cursor-pointer flex text-lg"><span className="flex justify-center flex-col py-1.5 pl-3 pr-1.5 bg-gray-700 rounded-full rounded-r-none">Pull Request</span><span className="text-shadow flex justify-center flex-col py-1.5 pr-3 pl-1.5 bg-purple-600 rounded-full rounded-l-none text-white">Badge</span></span>
            </a>
          </div>


        </div>

      </div >
    </div >
  )
}
