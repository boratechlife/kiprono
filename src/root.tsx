import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="KIPRONO DENIS " />
        <script src="//unpkg.com/alpinejs" defer></script>
        <meta
          name="description"
          content="A  web designer|developer and ecommerce consultant based in kenya.Proficient in CSS, HTML, REACT, VUE, ASTRO, ANTUI Tailwind css, etc "
        />
        <meta
          name="keywords"
          content="react, css, html, freelancer, web developer, web designer,"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="stylesheet" href="./output.css" />

        <link
          href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
          rel="stylesheet"
        />

        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body
        lang="en"
        class="overflow-x-hidden bg-[#f9f6f0] text-sm lg:text-base antialiased dark:bg-gray-800"
        x-data="{ SideBarOpen: false }"
      >
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
