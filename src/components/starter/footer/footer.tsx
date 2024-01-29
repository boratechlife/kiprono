import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section
      class="bg-pink-300 flex min-h-96 max-sm:px-4 bg-gradient-to-b lg:pt-20 from-transparent to-purple-600 relative flex-col"
      id="contact"
    >
      <div class="container mb-20 mx-auto w-full lg:w-1/2 flex h-full mt-10 gap-10 lg:gap-16 flex-col justify-center items-center">
        <h4 class="text-2xl lg:text-6xl shadow-sm leading-10 font-bold text-center text-white">
          Do you want to have your website live?
        </h4>

        <p class="font-light text-lg text-center text-gray-50 lg:text-2xl">
          Allow us to make your site spectacular and pretty fase
        </p>

        <button class="w-full lg:w-2/5 py-4 px-5 text-center bg-purple-800 text-lg text-white rounded border">
          Go to my office!
        </button>
      </div>

      <div class="w-full border-t border-white/20 mx-auto flex justify-center items-center text-sm text-gray-200 py-4">
        copyright@2024 kiprono.com
      </div>
    </section>
  );
});
