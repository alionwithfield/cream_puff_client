<template>
  <Disclosure as="nav">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="-ml-2 mr-2 flex items-center md:hidden"></div>
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-2xl font-bold tracking-tight">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://i.imgur.com/1osKPDP.png"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://i.imgur.com/1osKPDP.png"
              alt="Workflow"
            />
          </router-link>
        </div>
        <div class="md:ml-6 md:flex">
          <router-link
            :to="{ name: 'domande-frequenti' }"
            class="px-8 inline-flex items-center pt-1 text-md font-medium hover:text-green-500 hover:bg-white"
          >
            Domande frequenti
          </router-link>
          <!-- User account dropdown -->
          <Menu
            as="div"
            class="px-3 relative inline-block text-left"
            v-show="isPublic"
          >
            <div>
              <MenuButton
                class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
              >
                <span class="flex w-full justify-between items-center">
                  <span
                    class="flex min-w-0 items-center justify-between space-x-3"
                  >
                    <img
                      class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="flex-1 flex flex-col min-w-0">
                      <span class="text-gray-900 text-sm font-medium truncate">
                        Jessy Schwarz
                      </span>
                      <span class="text-gray-500 text-sm truncate">
                        @jessyschwarz
                      </span>
                    </span>
                  </span>
                  <SelectorIcon
                    class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >
                      View profile
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >
                      Notifications
                    </a>
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >
                      Logout
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MenuButton, Menu, MenuItem, MenuItems } from '@headlessui/vue';
import { Disclosure } from '@headlessui/vue';

export default defineComponent({
  name: 'NavbarTop',
  data: function () {
    return '';
  },
  components: {
    Disclosure,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  created() {
    isPublic = this.$route.meta.public
      return isPublic;
    },
  },
  setup(components) {
    return {
      components,
    };
  },
});
</script>
