import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <header class="fixed backdrop-blur-lg w-full items-center left-0 right-0 top-0 flex flex-wrap bg-transparent leading-10 py-3 px-4 lg:px-10 justify-between z-[99999]">
        <a
          href="/"
          class="text-4xl lg:text-5xl font-bold text-effect text-pink-500/50 inline-flex"
        >
          DE
          <span class="text-blue-700/50 ml-0">NO</span>
        </a>
        {/* :class="SideBarOpen ? '' : 'hidden'" */}
        <ul class="max-sm:fixed top-0 max-sm:w-3/4 max-sm:h-screen max-sm:pt-0 max-sm:bg-white right-0 lg:flex items-center justify-between lg:space-x-10 text-lg">
          <li class="flex lg:hidden justify-end px-4 py-2.5 text-pink-400">
            <span x-on:click="SideBarOpen = !SideBarOpen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            </span>
          </li>
          <li class="px-4 py-2 text-[#113] hover border-b-2 border-transparent hover:border-[#113]">
            <a href="#">Home</a>
          </li>
          <li class="px-4 py-2 text-[#113] hover border-b-2 border-transparent hover:border-[#113]">
            <a href="#about">About</a>
          </li>
          <li class="px-4 py-2 text-[#113] hover border-b-2 border-transparent hover:border-[#113]">
            <a href="#services">Services</a>
          </li>
          <li class="px-4 py-2 text-[#113] hover border-b-2 border-transparent hover:border-[#113]">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li class="px-4 py-2 text-[#113] hover border-b-2 border-transparent hover:border-[#113]">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li class="px-4 py-2 text-[#113] hover border-b-2 border-transparent hover:border-[#113]">
            <a href="https://boratechlife.hashnode.dev/">Blog</a>
          </li>
        </ul>
        {/* x-on:click="SideBarOpen = !SideBarOpen" */}
        <div class="text-pink-400 fill-pink-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="fill-current"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75m0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75M1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5"
            />
          </svg>
        </div>
      </header>
    </>
  );
});
