<template>
  <div class="relative overflow-hidden">
    <Popover as="header" class="relative">
      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div
            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="pt-5 pb-6">
              <div class="px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  {{ item.name }}
                </a>
              </div>
              <div class="mt-6 px-5">
                <a
                  href="#"
                  class="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  Start free trial
                </a>
              </div>
              <div class="mt-6 px-5">
                <p class="text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" class="text-gray-900 hover:underline">Login</a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <main>
      <div class="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
          >
            <div class="lg:py-24">
              <a
                href="#"
                class="inline-flex items-center text-gray-400 bg-gray-300 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span
                  class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-800 rounded-full"
                >
                  Prima volta?
                </span>
                <span class="ml-4 text-sm">Scopri come funziona</span>
                <ChevronRightIcon
                  class="ml-2 w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
              <h1
                class="mt-4 text-4xl tracking-tight font-extrabold text-zinc-900 sm:mt-12 sm:text-6xl lg:mt-6 xl:text-6xl"
              >
                <span class="block">Un modo migliore</span>
                <span class="block">di cercare informazioni</span>
              </h1>
              <p
                class="mt-3 text-base text-zinc-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
              <div class="mt-10 sm:mt-12">
                <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div class="sm:flex">
                    <div class="min-w-0 flex-1">
                      <label for="email" class="sr-only">
                        Denominazione, P. Iva, Codice Fiscale
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Cerca.."
                        class="block w-full px-4 py-3 rounded-md border-2 text-base text-zinc-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-100 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        class="block w-full py-3 px-4 rounded-md shadow bg-green-500 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      >
                        Cerca un documento
                      </button>
                    </div>
                  </div>
                  <p class="mt-3 text-xs text-zinc-400 sm:mt-4">
                    Start your free 14-day trial, no credit card necessary. By
                    providing your email, you agree to our
                    <a href="#" class="font-medium text-white">
                      terms of service
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline';
import { ChevronRightIcon } from '@heroicons/vue/solid';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default defineComponent({
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
});
</script>
