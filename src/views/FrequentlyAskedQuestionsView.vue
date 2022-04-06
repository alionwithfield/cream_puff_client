<template>
  <div class="max-w-3xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <dl class="mt-8 space-y-6 divide-y divide-gray-200">
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question"
        class="pt-6"
        v-slot="{ open }"
      >
        <dt class="text-lg">
          <DisclosureButton
            class="text-left w-full flex justify-between items-start text-gray-900"
          >
            <span class="font-medium hover:text-green-500">
              {{ faq.question }}
            </span>
            <span class="ml-6 h-7 flex items-center">
              <ChevronDownIcon
                :class="[
                  open ? '-rotate-180' : 'rotate-0',
                  'h-6 w-6 transform hover:text-green-500',
                ]"
                aria-hidden="true"
              />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 pr-12">
          <p class="text-base text-gray-500">
            {{ faq.answer }}
          </p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </div>
</template>

<script lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/outline';
import { defineComponent } from 'vue';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      faqs,
    };
  },
});
</script>
