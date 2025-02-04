import Image from "next/image";
import Head from 'next/head'
import { Github, Users, Star, Globe, Rocket, Code, Link as LinkIcon, Award, Box, ArrowRight } from 'lucide-react';
import cn from 'classnames'

const seoTitle = 'OctoLinker — Links together, what belongs together';
const seoDesc = 'Navigate Github rojects, files and dependencies faster with OctoLinker'

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
          This was the project's first code contribution, introducing support for a new package manager, made by <a rel="noopener noreferrer" href="https://github.com/barryvdh">@barryvdh</a>.
        </p>
      )
    },
    {
      "date": "2015-08-24",
      "title": "Live-Resolver API",
      "badge": "Huge improvment",
      "content": (
        <p>
          Earlier versions relied on large static lists for each supported registry bundled with the extension. This approach was not scalable and as it also impacted the browser performance. The new <strong>Live-Resolver API</strong> was introduced to resolve package links in real-time, ensuring up-to-date links and improved performance. This change also paved the way for future support of languages like Python, Ruby, and Go.
        </p>)
    },
    {
      "date": "2015-08-27",
      "title": "New user record",
      "content": (
        <>
          Surpassed 6,000 users after 1.5 years
        </>)
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
      "date": "2016-04-07",
      "title": "Support for RubyGems",
      "logos": [{ src: "/rubygems.png", alt: "rubygems logo" }],
      "content": ""
    },
    {
      "date": "2016-05-11",
      "title": "Support for Ruby",
      "logos": [{ src: "/ruby.png", alt: "Ruby logo" }],
      "content": (<p>OctoLinker supports now Ruby<code>require</code> statements</p>)
    },
    {
      "date": "2016-05-15",
      "new_contributor": "josephfrazier"
    },
    {
      "date": "2016-05-25",
      "title": "Homebrew formular support",
      "logos": [{ src: "/homebrew.png", alt: "Homebrew logo" }],
      "content": (
        <div>Added support for Homebrew formular navigation.</div>)
    },
    {
      "date": "2016-06-21",
      "title": "Firefox release",
      "image": { src: "/octolinker-firefox.jpg", alt: "Firefox logo" },
      "content": "OctoLinker is now available for Firefox."
    },
    {
      "date": "2016-08-02",
      "title": "TypeScript support",
      "logos": [{
        src: "/typescript.png", alt: "Typescript logo"
      }],
      "content": (
        <div>Added support for TypeScript definition paths.</div>)
    },
    {
      "date": "2016-08-02",
      "title": "Python, Rust, Docker, vimrc support",
      "logo": (<>
        <Image src="/python.png" alt="Python logo" width={200} height={200}></Image>
        <Image src="/rust.png" alt="rust logo" width={200} height={200}></Image>
        <Image src="/docker.png" alt="Docker logo" width={200} height={112}></Image>
        <Image src="/vim.png" alt="vimrc logo" width={200} height={200}></Image>
      </>
      ),
      "content": "Added support for Dockerhub."
    },
    {
      "date": "2016-09-01",
      "title": "10,000 users",
      "badge": "Milestone",
      "content": (
        <div>10,000 active users.</div>)
    },
    {
      "date": "2016-10-19",
      "title": ".NET Core support",
      "logo": (<>
        <Image src="/dotnet.png" alt=".NET logo" width={200} height={200}></Image>
      </>),
      "content": (
        <div>Added support for .NET Core <code>project.json</code> files.</div>)
    },
    {
      "date": "2017-11-10",
      "new_contributor": "xt0rted",
    },
    {
      "date": "2016-12-04",
      "title": "README and issues support",
      "content": "Added support to link dependencies from Readme's and Issues."
    },
    {
      "date": "2017-01-31",
      "title": "Go dependencies support",
      "logos": [{ src: "/go.png", alt: "GO logo" }],
      "content": (
        <div>Added support for Go</div>)
    },
    {
      "date": "2017-03-28",
      "title": "More language support",
      "logo": (<>
        <Image src="/haskell.png" alt="haskell logo" width={200} height={200}></Image>
        <Image src="/sass.png" alt="sass logo" width={200} height={200}></Image>
        <Image src="/less.png" alt="less logo" width={200} height={200}></Image>
      </>),
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
      "date": "2018-08-13",
      "title": "Dependency linking in PRs",
      "content": (
        <div>Link dependencies in Pull Requests to make you the world's fastest code reviewer </div>)
    },
    {
      "date": "2018-07-20",
      "title": "End 2 end testing",
      "content": (
        <div>
          We completed our testing pyramid by adding E2E testing using puppeteer. It's unbelievable simple to contribute E2E tests now. Here is how it works https://medium.com/@buckstefan/how-octolinker-runs-automate-e2e-tests-using-puppeteer-64db3622bec0
        </div>)
    },
    {
      "date": "2019-06-06",
      "title": "Major rework of link resolution",
      "content": (
        <div>Major rework of link resolution, making navigation faster. Super excited to finally announce the latest @OctoLinker release 🚀I’ve been working on this for the past half year. We’ve completely reworked the way we resolve links. Navigate and interact with GitHub faster than ever before!

          Powered by Vercel and RedisGreen
        </div>)
    },
    {
      "date": "2019-12-27",
      "title": "6-year anniversary",
      "content": (
        <div>25,000 active users and 4,000 GitHub stars.</div>)
    },
    {
      "date": "2020-04-12",
      "title": "Hovercards added",
      "content": (
        <div>OctoLinker v6.3 added hovercards for dependency insights.</div>)
    },
    {
      "date": "2020-08-19",
      "title": "GitHub Actions support",
      "content": (
        <div>OctoLinker v6.5.0 released—added more GitHub Actions support and better notifications.</div>)
    },
    {
      "date": "2021-01-17",
      "new_contributor": "fregante",
    },
    {
      "date": "2021-04-29",
      "title": "GitHub Archive Project feature",
      "content": (
        <div>OctoLinker selected as one of the '17,000 Greatest Hits' for the GitHub Archive Project.</div>)
    },
    {
      "date": "2022-01-07",
      "title": "Firefox issue fixed",
      "content": (
        <div>Fixed critical issue affecting OctoLinker for Firefox.</div>)
    },
    {
      "date": "2022-04-26",
      "title": "Chrome Web Store badge",
      "content": (
        <div>Received 'Established Publisher' badge on Chrome Web Store.</div>)
    },
    {
      "date": "2023-05-08",
      "title": "GitHub navigation changes",
      "content": (
        <div>GitHub’s new code navigation affected OctoLinker, raising concerns over its future.</div>)
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
        <div className="text-7xl">
          <strong>OctoLinker</strong>
        </div>
        <div className="text-lg">
          Revolutionizing GitHub Navigation for 9 Years
        </div>
      </section>

      <section className="container max-w-screen-lg mx-auto pb-4 grid justify-center">
        <div className=" w-full rounded-3xl backdrop-blur-md bg-blue-100/30 border sm:p-5 drop-shadow-lg">
          <div className="rounded-2xl bg-white h-full drop-shadow-md border-2 border-gray-100 overflow-hidden">
            <Image className='mx-auto max-w-screen-md' src="/screenshot.png" alt="OctoLinker screenshot" width={1780} height={1169} />
          </div>
        </div>
      </section>

      <div className="bg-white ">
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
        <div className="max-w-5xl mx-auto">

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

                item.title = "New core contributor";
                item.content = (
                  <div>
                    <a href={`https://github.com/${item.new_contributor}`} rel="noopener noreferrer">@{item.new_contributor}</a> joined as a core contributor.
                  </div>
                )
                item.logo = (
                  <a href={`https://github.com/${item.new_contributor}`} rel="noopener noreferrer">
                    <img src={`http://github.com/${item.new_contributor}.png`} width={80} height={80} className="rounded" alt="" />
                  </a>)
              }

              if (item.logos) {

                item.images = (<div className="logos flex flex-wrap gap-3">
                  {item.logos.map((logo, index) => {
                    return (
                      <div key={index} className="size-16 relative">
                        <Image src={logo.src} alt={logo.alt} className="w-16 rounded" layout={'fill'} objectFit={'contain'} />
                      </div>
                    )
                  })}
                </div>)
              }

              if (item.image) {
                item.images = (
                  <div className="relative size-48 md:size-64 md:mx-auto">
                    <Image src={item.image.src} alt={item.image.alt} layout={'fill'} objectFit={'contain'}></Image>
                  </div>
                )
              }


              return (
                <li key={index}>
                  <div className="timeline-middle h-0 relative z-0">
                    <span className="bg-octolinker-900  flex size-5 items-center justify-center rounded-full border-white border-4 relative z-10"></span>
                  </div>
                  <div className={classNames2}>
                    <div className="text-sm font-normal text-gray-400 -mt-2">{new Date(item.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}</div>
                  </div>
                  <div className={classNames3}>
                    <div className="card">
                      <div className="card-body gap-4">
                        {item.badge && <span className="badge badge-primary">{item.badge}</span>}
                        <h5 className="card-title text-lg">{item.title}</h5>
                        {item.content}
                        {item.images}
                      </div>
                    </div>
                  </div>
                  <hr className="border-4 bg-octolinker-100" />
                </li>
              )
            })}
          </ul>

          <div className="mt-8">
            <Image className='mx-auto' src="/mascot-tentacle.png" alt="OctoLinker Good bye" width={316 / 2} height={202 / 2} />
          </div>


          <ul className="mt-24 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">

            <li className="timeline-shift">
              <div className="timeline-middle h-16">
                <span className="bg-success/20 flex size-8 items-center justify-center rounded-full">
                  <span className="icon-[tabler--photo] text-success size-5"></span>
                </span>
              </div>
              <div className="timeline-end mt-6 px-1 md:mt-8">
                <div className="text-base-content/50 text-sm font-normal">24 day's ago</div>
              </div>
              <div className="timeline-start me-4 mb-8">
                <div className="card">
                  <div className="card-body gap-4">
                    <h5 className="card-title text-lg">Heather added 4 images to album</h5>
                    <p>
                      In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section
                    </p>
                    <div className="flex flex-wrap gap-4">

                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle h-16">
                <span className="bg-warning/20 flex size-8 items-center justify-center rounded-full">
                  <span className="icon-[tabler--star] text-warning size-5"></span>
                </span>
              </div>
              <div className="timeline-start me-4 mt-8 max-md:pt-2">
                <div className="text-base-content/50 text-sm font-normal">2 week's ago</div>
              </div>
              <div className="timeline-end ms-4 mb-8">
                <div className="card">
                  <div className="card-body gap-4">
                    <h5 className="card-title text-lg">Loretta wrote a review on Flyon</h5>
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="size-9.5 rounded-full">
                          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="User Avatar" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Loretta Moore</p>
                        <p className="text-sm">CTO of Airbnb</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-nowrap">
                      <div className="text-warning flex items-center">
                        <span className="icon-[tabler--star-filled] size-5"></span>
                        <span className="icon-[tabler--star-filled] size-5"></span>
                        <span className="icon-[tabler--star-filled] size-5"></span>
                        <span className="icon-[tabler--star-filled] size-5"></span>
                        <span className="icon-[tabler--star-filled] size-5"></span>
                      </div>
                      <span className="badge badge-soft badge-success uppercase">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="Anna" className="size-4.5 rounded-full" />
                        Verified buyer
                      </span>
                    </div>
                    <p>
                      I wish I could select more than one main reason for rating this. I love how they constantly work on to make
                      the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets.
                      Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate
                      this for so many times. I highly recommend this template!
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </li>
            <li className="timeline-shift">
              <div className="timeline-middle h-16">
                <span className="bg-info/20 flex size-8 items-center justify-center rounded-full">
                  <span className="icon-[tabler--chart-pie] text-info size-5"></span>
                </span>
              </div>
              <div className="timeline-end mt-6 px-1 md:mt-8">
                <div className="text-base-content/50 text-sm font-normal">A week ago</div>
              </div>
              <div className="timeline-start me-4 mb-8 w-full">
                <div className="card">
                  <div className="card-body gap-4">
                    <h5 className="card-title text-lg">Julia stiles shared an earnings report</h5>
                    <div>
                      <div className="flex flex-wrap items-center gap-0.5 mb-1">
                        <h4 className="text-base-content font-medium text-xl">$24,895</h4>
                        <p className="text-success flex items-center">
                          <span className="icon-[tabler--caret-up-filled] me-0.5"></span>
                          10%
                        </p>
                      </div>
                      <p className="text-sm">Compared to $84,325 last year</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="bg-base-content/5 size-10 rounded-md">
                              <img src="https://cdn.flyonui.com/fy-assets/components/card/icon-1.png" alt="Zipcar Logo" />
                            </div>
                          </div>
                          <div>
                            <div className="text-base-content font-medium">Zipcar</div>
                            <div className="text-sm">Vuejs, React & HTML</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 max-sm:w-full">
                          <p className="text-base-content">$24,895.65</p>
                          <div className="progress" role="progressbar" aria-label="Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-primary w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="bg-base-content/5 size-10 rounded-md">
                              <img src="https://cdn.flyonui.com/fy-assets/components/card/icon-2.png" alt="Bitbank logo" />
                            </div>
                          </div>
                          <div>
                            <div className="text-base-content font-medium">Bitbank</div>
                            <div className="text-sm">Sketch, Figma & XD</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 max-sm:w-full">
                          <p className="text-base-content">$8,6500.20</p>
                          <div className="progress" role="progressbar" aria-label="Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-info w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="bg-base-content/5 size-10 rounded-md">
                              <img src="https://cdn.flyonui.com/fy-assets/components/card/icon-3.png" alt="aviato logo" />
                            </div>
                          </div>
                          <div>
                            <div className="text-base-content font-medium">Aviato</div>
                            <div className="text-sm">HTML & Angular</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 max-sm:w-full">
                          <p className="text-base-content">$1,2450.80</p>
                          <div className="progress" role="progressbar" aria-label="Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-secondary w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle h-16">
                <span className="bg-primary/20 flex size-8 items-center justify-center rounded-full">
                  <span className="icon-[tabler--folder] text-primary size-5"></span>
                </span>
              </div>
              <div className="timeline-start me-4 mt-8 max-md:pt-2">
                <div className="text-base-content/50 text-sm font-normal">2 day’s ago</div>
              </div>
              <div className="timeline-end ms-4">
                <div className="card">
                  <div className="card-body gap-4">
                    <h5 className="card-title text-lg">Johnson shared NextJS project</h5>
                    <p>
                      The project organization's structure and process are meticulously crafted to align with both corporate and
                      project goals. Key components include planning, execution, monitoring, controlling, resource allocation,
                      risk management, and stakeholder engagement.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </li>
          </ul>


        </div>

      </div>
    </div >
  )
}