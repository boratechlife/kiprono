import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <section class="w-full py-10 pt-20">
        <div class="container max-sm:w-11/12 mx-auto">
          <div class="flex max-sm:w-full lg:h-[600px] relative gradient-border filter-[100px] w-3/4 rounded-3xl hero-animated-gradient-border mx-auto mt-10 border-4 shadow-xl bg-transparent">
            <div class="icons absolute lg:px-10 max-sm:top-1/4 transform max-sm:-translate-y-1/4 max-sm:flex-col max-sm:right-0 lg:bottom-2 *:h-10 *:w-10 flex gap-4 items-center">
              <a href="https://www.fiverr.com/boratechlife">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  class="h-8 w-8"
                  viewBox="-2 -2 24 24"
                >
                  <g fill="currentColor">
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                    <path d="M13.427 13.148v-5h-5v-.312c0-.517.42-.938.938-.938h.937V5.023h-.937a2.816 2.816 0 0 0-2.813 2.813v.312h-1.25v1.875h1.25v3.125h-1.25v1.875h4.375v-1.875h-1.25v-3.125h3.143v3.125h-1.268v1.875h4.375v-1.875z" />
                    <circle cx="12.402" cy="5.971" r="1.001" />
                  </g>
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  class="h-6 w-6"
                  viewBox="0 0 128 128"
                >
                  <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  class="h-6 w-6"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#fff" rx="60" />
                    <rect width="256" height="256" fill="#0A66C2" rx="60" />
                    <path
                      fill="#fff"
                      d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div class="w-full max-sm:flex-col flex justify-around items-center px-4 lg:px-10">
              <div class="w-full lg:w-1/2 max-sm:py-10">
                <h4 class="font-light text-sm lg:text-2xl lg:mb-4 bg-black px-1 py-1 inline-flex rounded shadow text-white">
                  <code class="bg-black"> console.log("Hello world") </code>
                </h4>

                <h1 class="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
                  I am <span class="font-black text-orange-600">Denis</span>
                </h1>
                <p class="text-base lg:text-2xl lg:font-light text-gray-800 w-11/12 lg:w-2/3 mb-10">
                  Vuejs, Qwik, React, Next, Nuxt, Tailwindcss & Figma are
                  <span class="text-pink-500">the Ingredients</span> in my
                  Frontend Recipe!
                </p>

                <div class="flex gap-4">
                  <a href="https://www.fiverr.com/boratechlife" class="">
                    <button class="bg-orange-600 text-white px-10 rounded-xl py-3 text-lg">
                      Go To My Office
                    </button>
                  </a>
                </div>
              </div>

              <div class="w-full lg:w-1/2">
                <div class="box relative backdrop-blur-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] max-sm:w-[200px] w-[400px] transition-all duration-500 max-sm:h-[200px] h-[400px] bg-white-500/50 before:animate-spin-slow before:absolute before:inset-y-[-20px] overflow-hidden rounded-full max-sm:before:inset-x-[50px] before:inset-x-[100px] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 after:absolute after:inset-[6px] z-10 after:rounded-full after:bg-[#162052]">
                  <div class="content absolute bg-white/5 inset-[10px] border border-orange-800/50 z-30 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="./images/profile.png"
                      class="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="relative py-4 lg:py-20 mb-20 w-full overflow-hidden"
        id="about"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-200/10 to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 bg-[url('/images/particles.gif')] animate-pulse lg:animate-none bg-cover bg-center"></div>

        <div class="relative z-10 flex justify-center items-center w-full">
          <div class="container mx-auto flex items-center justify-center">
            <div class="w-full lg:w-3/4 p-6 lg:p-10 mx-auto lg:h-[500px] border-[1px] flex flex-col justify-center rounded shadow-xl mt-10 bg-white/70 backdrop-blur-lg">
              <div class="text-center">
                <h4 class="text-3xl lg:text-6xl mb-4 text-pink-500 font-extrabold tracking-tight transition-all hover:text-pink-600">
                  About Me
                </h4>

                <p class="text-gray-600 text-lg lg:text-2xl mb-6">
                  Passionate Frontend Developer with expertise in modern
                  frameworks.
                </p>

                <p class="text-gray-500 text-lg lg:text-xl">
                  I am Denis, a remote frontend expert with over 4 years of
                  experience in Vue, Angular, React, and more. I specialize in
                  creating dynamic, user-friendly websites and applications.
                </p>

                <a
                  href="#contact"
                  class="mt-6 inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-pink-600 transition-colors"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="lg:py-20 max-sm:mt-40" id="services">
        <div class="container mx-auto w-full lg:w-3/4">
          <h2 class="text-4xl lg:text-5xl text-pink-500 w-full text-center py-10 font-bold mb-10">
            WHAT I CAN DO FOR YOU
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 max-sm:mt-40">
            <div class="bg-[#f9f6f0] inset-shadow rounded-lg">
              <div class="bg-[#f9f6f0] py-6 px-4">
                <h4 class="text-2xl lg:text-2xl text-center text-blue-600 font-bold mb-4">
                  FIGMA CONVERSION
                </h4>
                <p class="text-base text-gray-800 pb-10 mt-6 leading-8">
                  I am proficient in converting Figma designs into responsive
                  and clean HTML, CSS code. Additionally, I have expertise in
                  implementing these designs into modern web frameworks and
                  libraries such as Qwik, Astro, Vue, and React, ensuring
                  seamless integration and dynamic user experiences.
                </p>

                <div class="flex gap-4 lg:gap-10 flex-wrap items-center justify-center">
                  <span class="h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="figma"
                    >
                      <path
                        fill="#0ACF83"
                        d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                      ></path>
                      <path
                        fill="#A259FF"
                        d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                      ></path>
                      <path
                        fill="#F24E1E"
                        d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                      ></path>
                      <path
                        fill="#FF7262"
                        d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                      ></path>
                      <path
                        fill="#1ABCFE"
                        d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                      ></path>
                    </svg>
                  </span>

                  <span class="h-10 w-10">
                    <img src="/images/css.svg" alt="" />
                  </span>
                  <span class="h-10 w-10">
                    <img src="/images/html5.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-[#f9f6f0] inset-shadow rounded-lg">
              <div class="bg-[#f9f6f0] py-6 px-4">
                <h4 class="text-2xl lg:text-2xl text-center text-blue-600 font-bold mb-4">
                  Develop Qwik/Astro Site
                </h4>
                <p class="text-base text-gray-800 pb-10 mt-6 leading-8">
                  Experience lightning-fast web performance with our Qwik/Astro
                  Site development service! We specialize in harnessing the
                  power of Qwik and Astro, cutting-edge frameworks designed for
                  speed and efficiency.
                </p>

                <div class="flex gap-4 lg:gap-10 flex-wrap items-center justify-center">
                  <span class="h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="figma"
                    >
                      <path
                        fill="#0ACF83"
                        d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                      ></path>
                      <path
                        fill="#A259FF"
                        d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                      ></path>
                      <path
                        fill="#F24E1E"
                        d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                      ></path>
                      <path
                        fill="#FF7262"
                        d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                      ></path>
                      <path
                        fill="#1ABCFE"
                        d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                      ></path>
                    </svg>
                  </span>

                  <span class="h-10 w-10">
                    <img src="/images/css.svg" alt="" />
                  </span>
                  <span class="h-10 w-10">
                    <img src="/images/html5.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-[#f9f6f0] inset-shadow rounded-lg">
              <div class="bg-[#f9f6f0] py-6 px-4">
                <h4 class="text-2xl lg:text-2xl text-center text-blue-600 font-bold mb-4">
                  Build BUN Apps
                </h4>
                <p class="text-base text-gray-800 pb-10 mt-6 leading-8">
                  If you want to build apis with bun or application with bun and
                  html, then I am here to help you.
                </p>

                <div class="flex gap-4 lg:gap-10 flex-wrap items-center justify-center">
                  <span class="h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="figma"
                    >
                      <path
                        fill="#0ACF83"
                        d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                      ></path>
                      <path
                        fill="#A259FF"
                        d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                      ></path>
                      <path
                        fill="#F24E1E"
                        d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                      ></path>
                      <path
                        fill="#FF7262"
                        d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                      ></path>
                      <path
                        fill="#1ABCFE"
                        d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                      ></path>
                    </svg>
                  </span>

                  <span class="h-10 w-10">
                    <img src="/images/css.svg" alt="" />
                  </span>
                  <span class="h-10 w-10">
                    <img src="/images/html5.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-[#f9f6f0] inset-shadow rounded-lg">
              <div class="bg-[#f9f6f0] py-6 px-4">
                <h4 class="text-2xl lg:text-2xl text-center text-blue-600 font-bold mb-4">
                  Nextjs or Nuxtjs Developer
                </h4>
                <p class="text-base text-gray-800 pb-10 mt-6 leading-8">
                  Do yo want someone to help you build websites with nextjs or
                  nuxtjs? Well, I can help you craft fast amazing wesbites using
                  either techologies and other such as tailwindcss
                </p>

                <div class="flex gap-4 lg:gap-10 flex-wrap items-center justify-center">
                  <span class="h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="figma"
                    >
                      <path
                        fill="#0ACF83"
                        d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                      ></path>
                      <path
                        fill="#A259FF"
                        d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                      ></path>
                      <path
                        fill="#F24E1E"
                        d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                      ></path>
                      <path
                        fill="#FF7262"
                        d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                      ></path>
                      <path
                        fill="#1ABCFE"
                        d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                      ></path>
                    </svg>
                  </span>

                  <span class="h-10 w-10">
                    <img src="/images/css.svg" alt="" />
                  </span>
                  <span class="h-10 w-10">
                    <img src="/images/html5.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-[#f9f6f0] inset-shadow rounded-lg">
              <div class="bg-[#f9f6f0] py-6 px-4">
                <h4 class="text-2xl lg:text-2xl text-center text-blue-600 font-bold mb-4">
                  React/ Vue Developer
                </h4>
                <p class="text-base text-gray-800 pb-10 mt-6 leading-8">
                  I also provide remote frontend services like developing
                  progressive web apps in Vue and React js. This can be but not
                  limited to e-commerce, portfolios, landing pages etc.
                </p>

                <div class="flex gap-4 lg:gap-10 flex-wrap items-center justify-center">
                  <span class="h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="figma"
                    >
                      <path
                        fill="#0ACF83"
                        d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                      ></path>
                      <path
                        fill="#A259FF"
                        d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                      ></path>
                      <path
                        fill="#F24E1E"
                        d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                      ></path>
                      <path
                        fill="#FF7262"
                        d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                      ></path>
                      <path
                        fill="#1ABCFE"
                        d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                      ></path>
                    </svg>
                  </span>

                  <span class="h-10 w-10">
                    <img src="/images/css.svg" alt="" />
                  </span>
                  <span class="h-10 w-10">
                    <img src="/images/html5.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-[#f9f6f0] inset-shadow rounded-lg">
              <div class="bg-[#f9f6f0] py-6 px-4">
                <h4 class="text-2xl lg:text-2xl text-center text-blue-600 font-bold mb-4">
                  JUNIOR AI Developer
                </h4>
                <p class="text-base text-gray-800 pb-10 mt-6 leading-8">
                  I have recently dived into ai specifically tensorflow, and
                  openai and I can help you work on small Ai task such as
                  preprocessing, model training, data cleaning and intergrating
                  openAI Api to your application
                </p>

                <div class="flex gap-4 lg:gap-10 flex-wrap items-center justify-center">
                  <span class="h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="figma"
                    >
                      <path
                        fill="#0ACF83"
                        d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                      ></path>
                      <path
                        fill="#A259FF"
                        d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                      ></path>
                      <path
                        fill="#F24E1E"
                        d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                      ></path>
                      <path
                        fill="#FF7262"
                        d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                      ></path>
                      <path
                        fill="#1ABCFE"
                        d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                      ></path>
                    </svg>
                  </span>

                  <span class="h-10 w-10">
                    <img src="/images/css.svg" alt="" />
                  </span>
                  <span class="h-10 w-10">
                    <img src="/images/html5.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:py-20" id="portfolio">
        <div class="container mx-auto w-full lg:w-3/4">
          <h2 class="text-4xl lg:text-5xl text-pink-500 w-full text-center py-10 font-bold mb-10">
            WHAT I HAVE DONE
          </h2>

          <div class="w-full space-y-10">
            <div class="w-full flex gap-10 items-center max-sm:flex-col">
              <div class="w-full lg:w-2/3 flex items-center">
                <img
                  src="/images/candlest.PNG"
                  class="w-full appearance-auto"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/4 text-lg max-sm:px-4">
                <h4 class="text-xl lg:text-2xl font-bold mb-4">Candle.st</h4>
                <p>
                  This is a remote project for a client who hired me to be
                  part-time Frontend Developer. I work on converting figma to
                  Nuxt and Tailwindcss.
                </p>

                <div class="py-3 mt-5">
                  <a
                    href="https://candle.st/"
                    class="bg-blue-500 rounded-lg text-white px-8 py-3 text-center"
                  >
                    Find out More
                  </a>
                </div>
              </div>
            </div>

            <div class="w-full flex gap-10 items-center max-sm:flex-col">
              <div class="w-full lg:w-2/3 flex items-center">
                <img
                  src="/images/mercuraio.PNG"
                  class="w-full appearance-auto"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/4 text-lg max-sm:px-4">
                <h4 class="text-xl lg:text-2xl font-bold mb-4">Mercura.io</h4>
                <p>
                  This was an astrojs project from a client on fiverr who wanted
                  a figma design converted to astro js and to make it SEO
                  friendly.
                </p>

                <div class="py-3 mt-5">
                  <a
                    href="https://mercuca-test.pages.dev/"
                    class="bg-blue-500 rounded-lg text-white px-8 py-3 text-center"
                  >
                    Find out More
                  </a>
                </div>
              </div>
            </div>

            <div class="w-full flex gap-10 items-center max-sm:flex-col">
              <div class="w-full lg:w-2/3 flex items-center">
                <img
                  src="/images/eternalcreation.PNG"
                  class="w-full appearance-auto"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/4 text-lg max-sm:px-4">
                <h4 class="text-xl lg:text-2xl font-bold mb-4">
                  Eternal Creations
                </h4>
                <p>
                  This is the Nextjs project from a client on fiverr who wanted
                  to have figma design to html, tailwindcss and Nextjs.
                </p>

                <div class="py-3 mt-5">
                  <a
                    href="https://eternalcreations.games/"
                    class="bg-blue-500 rounded-lg text-white px-8 py-3 text-center"
                  >
                    Find out More
                  </a>
                </div>
              </div>
            </div>

            <div class="w-full flex gap-10 items-center max-sm:flex-col">
              <div class="w-full lg:w-2/3 flex items-center">
                <img
                  src="/images/qwik-commerce.PNG"
                  class="w-full appearance-auto"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/4 text-lg max-sm:px-4">
                <h4 class="text-xl lg:text-2xl font-bold mb-4">
                  Qwik Commerce
                </h4>
                <p>
                  This was a qwik trial website for a client from fiverr who
                  wanted to test the speed of a website build on qwik.
                </p>

                <div class="py-3 mt-5">
                  <a
                    href="https://candle.st/"
                    class="bg-blue-500 rounded-lg text-white px-8 py-3 text-center"
                  >
                    Find out More
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full flex gap-10 items-center max-sm:flex-col">
              <div class="w-full lg:w-2/3 flex items-center">
                <img
                  src="/images/spacesdashboard.PNG"
                  class="w-full appearance-auto"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/4 text-lg max-sm:px-4">
                <h4 class="text-xl lg:text-2xl font-bold mb-4">
                  spaces dashboard
                </h4>
                <p>
                  A spaces directory website that a designed into html, tailwind
                  and next for a client in nextjs
                </p>

                <div class="py-3 mt-5">
                  <a
                    href="https://spacesdashboard.com"
                    class="bg-blue-500 rounded-lg text-white px-8 py-3 text-center"
                  >
                    Find out More
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full flex gap-10 items-center max-sm:flex-col">
              <div class="w-full lg:w-2/3 flex items-center">
                <img
                  src="/images/servicefolder.PNG"
                  class="w-full appearance-auto"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/4 text-lg max-sm:px-4">
                <h4 class="text-xl lg:text-2xl font-bold mb-4">
                  Service Folder
                </h4>
                <p>
                  This was a listing website for hvac service providers which
                  involved taking a tailwindcss template and converting it to
                  astro js.
                </p>

                <div class="py-3 mt-5">
                  <a
                    href="https://www.servicefolder.com/"
                    class="bg-blue-500 rounded-lg text-white px-8 py-3 text-center"
                  >
                    Find out More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-20" id="testimonials">
        <div class="container w-11/12 lg:w-3/4 mx-auto">
          <h2 class="text-4xl lg:text-5xl text-pink-500 w-full text-center py-10 font-bold mb-10">
            WHAT CLIENTS SAY
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div class="w-full shadow-md border border-pink-400 relative p-4 gap-4 flex flex-col items-center justify-center filter-[100px] backdrop-blur-sm py-5 rounded-t-3xl rounded-b-md bg-white/10 bg-opacity-90">
              <div class="h-20 flex-none w-20 shadow-3xl bg-purple-500 text-white rounded-3xl flex items-center text-6xl font-bold justify-center">
                B
              </div>

              <span class="relative">
                <strong class="text-4xl font-extrabold absolute -left-2 -top-4">
                  "
                </strong>
                Denis accomplished all the tasks I gave him, few of them were a
                bit tricky. But he managed to pull them off successfully. Would
                definitely recommend him 👍
                <strong class="text-4xl font-extrabold absolute bottom-0 right-0">
                  "
                </strong>
              </span>

              <div class="h-20 w-full flex">
                <span class="text-lg font-light italic">-Bytepixels</span>
                <div class="absolute rounded-br-md -right-[1px] py-3.5 px-2.5 -bottom-[1px] border-t border-l bg-[#f9f6f0] border-b-none border-r-none border-pink-400 rounded-tl-xl">
                  <ul class="flex items-center gap-1.5">
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full shadow-md border border-pink-400 relative p-4 gap-4 flex flex-col items-center justify-center filter-[100px] backdrop-blur-sm py-5 rounded-t-3xl rounded-b-md bg-white/10 bg-opacity-90">
              <div class="h-20 flex-none w-20 shadow-3xl bg-purple-500 text-white rounded-3xl flex items-center text-6xl font-bold justify-center">
                A
              </div>

              <span>
                <strong class="text-4xl font-extrabold">"</strong> The seller
                had an open communication channel and was very responsive to
                getting the work done to suit our needs.
                <strong class="text-4xl font-extrabold">"</strong>
              </span>

              <div class="h-20 w-full flex">
                <span class="text-lg font-light italic">-ak37165</span>
                <div class="absolute rounded-br-md -right-[1px] py-3.5 px-2.5 -bottom-[1px] border-t border-l bg-[#f9f6f0] border-b-none border-r-none border-pink-400 rounded-tl-xl">
                  <ul class="flex items-center gap-1.5">
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full shadow-md border border-pink-400 relative p-4 gap-4 flex flex-col items-center justify-center filter-[100px] backdrop-blur-sm py-5 rounded-t-3xl rounded-b-md bg-white/10 bg-opacity-90">
              <div class="h-20 flex-none w-20 shadow-3xl bg-purple-500 text-white rounded-3xl flex items-center text-6xl font-bold justify-center">
                K
              </div>

              <span>
                <strong class="text-4xl font-extrabold">"</strong> as always
                great work form this seller! will use him again for more
                projects
                <strong class="text-4xl font-extrabold">"</strong>
              </span>

              <div class="h-20 w-full flex">
                <span class="text-lg font-light italic">-kencoplenco</span>
                <div class="absolute rounded-br-md -right-[1px] py-3.5 px-2.5 -bottom-[1px] border-t border-l bg-[#f9f6f0] border-b-none border-r-none border-pink-400 rounded-tl-xl">
                  <ul class="flex items-center gap-1.5">
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full shadow-md border border-pink-400 relative p-4 gap-4 flex flex-col items-center justify-center filter-[100px] backdrop-blur-sm py-5 rounded-t-3xl rounded-b-md bg-white/10 bg-opacity-90">
              <div class="h-20 flex-none w-20 shadow-3xl bg-purple-500 text-white rounded-3xl flex items-center text-6xl font-bold justify-center">
                G
              </div>

              <span>
                <strong class="text-4xl font-extrabold">"</strong>
                Communication with the Seller was very good, answered quickly
                and politely. Delivered the job in the promised deadline, but he
                did not look really carefully into the requirements. There were
                a few features missing, and a few not correctly implemented.
                After two revisions he said he can't do one of them, but kindly
                offered a discount.
                <strong class="text-4xl font-extrabold">"</strong>
              </span>

              <div class="h-20 w-full flex">
                <span class="text-lg font-light italic">-glappa</span>
                <div class="absolute rounded-br-md -right-[1px] py-3.5 px-2.5 -bottom-[1px] border-t border-l bg-[#f9f6f0] border-b-none border-r-none border-pink-400 rounded-tl-xl">
                  <ul class="flex items-center gap-1.5">
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full shadow-md border border-pink-400 relative p-4 gap-4 flex flex-col items-center justify-center filter-[100px] backdrop-blur-sm py-5 rounded-t-3xl rounded-b-md bg-white/10 bg-opacity-90">
              <div class="h-20 flex-none w-20 shadow-3xl bg-purple-500 text-white rounded-3xl flex items-center text-6xl font-bold justify-center">
                R
              </div>

              <span>
                <strong class="text-4xl font-extrabold">"</strong> Great Work
                and it was done very fast.
                <strong class="text-4xl font-extrabold">"</strong>
              </span>

              <div class="h-20 w-full flex">
                <span class="text-lg font-light italic">- rubendn</span>
                <div class="absolute rounded-br-md -right-[1px] py-3.5 px-2.5 -bottom-[1px] border-t border-l bg-[#f9f6f0] border-b-none border-r-none border-pink-400 rounded-tl-xl">
                  <ul class="flex items-center gap-1.5">
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full shadow-md border border-pink-400 relative p-4 gap-4 flex flex-col items-center justify-center filter-[100px] backdrop-blur-sm py-5 rounded-t-3xl rounded-b-md bg-white/10 bg-opacity-90">
              <div class="h-20 flex-none w-20 shadow-3xl bg-purple-500 text-white rounded-3xl flex items-center text-6xl font-bold justify-center">
                R
              </div>

              <span>
                <strong class="text-4xl font-extrabold">"</strong> Great & Fast
                deliverly for Sveltekit with Tailwindcss, keep up the great work
                <strong class="text-4xl font-extrabold">"</strong>
              </span>

              <div class="h-20 w-full flex">
                <span class="text-lg font-light italic">-rkroells</span>
                <div class="absolute rounded-br-md -right-[1px] py-3.5 px-2.5 -bottom-[1px] border-t border-l bg-[#f9f6f0] border-b-none border-r-none border-pink-400 rounded-tl-xl">
                  <ul class="flex items-center gap-1.5">
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                    <li class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        class="w-6 h-6"
                        height="32"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});
