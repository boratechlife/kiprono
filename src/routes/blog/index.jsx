import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <div class="container mx-auto px-4 py-8 max-w-4xl pt-40">
        <div class="bg-gradient-to-r from-blue-500 to-teal-500 p-10 py-24 text-center">
          <h1 class="text-4xl mt-6 md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">
            Welcome to My Blog
          </h1>
          <p class="mt-10 text-xl md:text-2xl text-blue-100">
            Exploring the intersections of technology, creativity, and life
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 py-10">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <h2 class="text-2xl font-bold text-gray-800 p-5">Post Title</h2>
            <p class="text-gray-600 text-base p-5">
              This is a short excerpt from the blog post. It should provide a
              brief overview or teaser of the post's content.
            </p>
            <div class="p-5">
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-900 transition duration-300 ease-in-out"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});
