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
      date: 'Dec. 2013',
      title: 'Initial Launch',
      content: 'Stefan Buck created the original GitHub Linker Chrome extension'
    },
    {
      date: 'Mar. 2015',
      title: 'Social Media Launch',
      content: 'OctoLinker officially joined Twitter platform'
    },
    {
      date: 'Aug. 24, 2015',
      title: 'Live Resolver Implementation',
      content: 'Implemented real-time package resolver API with v3.8.0'
    },
    {
      date: 'Aug. 27, 2015',
      title: 'Installation Milestone',
      content: 'Reached 6,000 installations milestone'
    },
    {
      date: 'Dec. 8, 2015',
      title: 'Rebranding',
      content: 'Due to legal issues, project renamed from GitHub Linker to OctoLinker through community vote'
    },
    {
      date: 'June 21, 2016',
      title: 'Firefox Launch',
      content: 'OctoLinker became available for Firefox browsers'
    },
    {
      date: 'Sept. 1, 2016',
      title: 'Major Milestone',
      content: 'Reached 10,000 active users'
    },
    {
      date: 'Dec. 2017',
      title: 'Java Support',
      content: 'Added comprehensive Java support including Spring, slf4j, Jackson, JUnit, Mockito and Hamcrest'
    },
    {
      date: 'July 2018',
      title: 'Privacy Update',
      content: 'Removed client-side tracking to enhance user privacy'
    },
    {
      date: 'Aug. 2019',
      title: 'Deno Support',
      content: 'Released v5.1 with support for Deno imports'
    },
    {
      date: 'Jan. 2020',
      title: 'Microsoft Edge Support',
      content: 'OctoLinker became available on Microsoft Edge'
    },
    {
      date: 'Apr. 2022',
      title: 'Chrome Recognition',
      content: 'Received the Established Publisher badge on the Chrome Web Store'
    },
    {
      date: 'May 8, 2023',
      title: 'Major Challenge',
      content: "GitHub's new code view implementation made code injection via browser extension significantly more difficult"
    },
    {
      date: 'Oct. 27, 2023',
      title: 'Latest Development',
      content: 'Stefan Buck working on solution to provide information directly on GitHub repositories without requiring internal developer portals'
    }
  ];


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
        <div className=" w-full rounded-3xl backdrop-blur-md bg-white/30 border sm:p-5 drop-shadow-lg">
          <div className="rounded-2xl bg-white h-full drop-shadow-md border-2 border-gray-100 overflow-hidden">
            <Image className='mx-auto max-w-screen-md' src="/screenshot.png" alt="OctoLinker screenshot" width={1780} height={1169} />
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="relative py-20 px-4 bg-gradient-to-b to-blue-100 from-white">
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
        </div>

        <div className="pt-6 bg-gradient-to-b from-blue-100 to-white">

          <div className="mb-12">
            <Image className='mx-auto' src="/mascot-down.png" alt="OctoLinker down" width={410 / 2} height={210 / 2} />
          </div>
        </div>
        <div className="max-w-3xl mx-auto">

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">

            {timelineEvents.map((item, index) => {

              const isOdd = index % 2;

              const classNames2 = cn('me-4 mt-2 max-md:pt-2', {
                'timeline-start': isOdd,
                'timeline-end': !isOdd,
              })
              const classNames3 = cn('ms-4 mb-8', {
                'timeline-start': !isOdd,
                'timeline-end': isOdd,
              })



              return (
                <li key={index} className={cn({
                  'timeline-shift': !isOdd
                })}>
                  <div className="timeline-middle h-4">
                    <span className="bg-octolinker-900  flex size-4 items-center justify-center rounded-full"></span>
                  </div>
                  <div className={classNames2}>
                    <div className="text-sm font-normal text-gray-400">{item.date}</div>
                  </div>
                  <div className={classNames3}>
                    <div className="card">
                      <div className="card-body gap-4">
                        <h5 className="card-title text-lg">{item.title}</h5>
                        {item.content}
                      </div>
                    </div>
                  </div>
                  <hr />
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
                      <img src="/javascript.png" alt="" className="w-16 rounded" />
                      <img src="/composer.png" alt="" className="w-16 rounded" />
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
    </div>
  )
}