<script setup lang="ts">
// import Language from "./Language.vue";
const router = useRouter();
</script>

<template>
  <nav
    class="top-0 left-0 right-0 fixed flex bg-white h-14 border-b z-30 wscreen transition-position xl:pl-60 lg:w-auto lg:items-stretch dark:bg-gr ay-900 dark:border-gray-800 border-gray-100"
    style=""
  >
    <div class="container px-6 py-4 mx-auto">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-gray-700">
            <a
              class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 d ark:hover:text-gray-300"
              href="#"
            ></a>
          </div>
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focu s:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0
0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="flex-1 md:flex md:items-center md:justify-between">
          <div class="flex flex-col -mx-4 md:flex-row md:items-center md: mx-8">
            <!-- <a href="#"
class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-70
0 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Join
Slack</a>
<a href="#"
class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-70
0 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-g
ray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Browse
Topics</a>
<a href="#"
class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-70
0 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-g
ray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Random
Item</a>
<a href="#"
class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-70
0 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-g
ray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Experts</a> -->
          </div>
          <div class="flex items-center mt-4 md:mt-0">
            <!-- <Language></Language> -->
            <button
              class="hidden mx-4 text-gray-600 transition-colors duration -200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hove r:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outlin e-none"
              aria-label="show notifications"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973
18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046
3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V
14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6
569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              @click="router.push('/login')"
              class="f lex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div
                class="w-8 h-8 overflow-hidden border-2 border-gray-40 0 rounded-full"
              >
                <img
                  src="../assets/login/ranshu.png"
                  class="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>
              <h3
                class="mx-2 text-sm font-medium text-gray-700 dark:text -gray-200 md:hidden"
              >
                Khatab wedaa
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>