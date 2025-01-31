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
    }
  ];


  return (
    <div>
      <Head>
        <style>
          {`
.bg-octolinker-900 { background-color: #fd4eff; }
.bg-octolinker-200 { background-color: #fbcbfc; }

.text-octolinker-900 {
  color: #fd4eff;
}
`}
        </style>
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



      <section className="hero container max-w-screen-lg mx-auto pb-4 grid justify-center">
        <Image className='mx-auto' src="/octolinker.png" width={325 / 2} height={303 / 2} />
      </section>

      <section className="hero container max-w-screen-lg mx-auto pb-10 grid justify-center text-center">
        <div className="text-6xl">
          <strong>OctoLinker</strong>
        </div>
        <div>
          Revolutionizing GitHub Navigation for 9 Years
        </div>
      </section>

      <Image className='mx-auto max-w-screen-md' src="/screenshot.png" width={1743} height={1165} />

      <div className="min-h-screen bg-white">
        <div className="relative py-20 px-4 bg-gradient-to-b to-blue-50 from-white">
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-md mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border bg-gradient-to-b from-blue-50 to-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <stat.icon className="w-8 h-8" />
                    <span className="text-3xl font-bold">{stat.value}</span>
                    <span className="text-sm">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
            <li>
              <div className="timeline-middle h-16">
                <span className="bg-error/20 flex size-8 items-center justify-center rounded-full">
                  <span className="icon-[tabler--file] text-error size-5"></span>
                </span>
              </div>
              <div className="timeline-start me-4 mt-8 max-md:pt-2">
                <div className="text-base-content/50 text-sm font-normal">2 month’s ago</div>
              </div>
              <div className="timeline-end ms-4 mb-8">
                <div className="card">
                  <div className="card-body gap-4">
                    <h5 className="card-title text-lg">You've uploaded doc pdf to the Flyon</h5>
                    <p>
                      The process of recording the key project details and producing the documents that are required to implement
                      it successfully. Simply put, it's an umbrella term which includes all the documents created over the course
                      of the project.
                    </p>
               
                  </div>
                </div>
              </div>
              <hr />
            </li>
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