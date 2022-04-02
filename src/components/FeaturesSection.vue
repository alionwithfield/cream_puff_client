<template>
  <div class="py-16 bg-white overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative">
        <h2
          class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          A better way to search informations
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          magnam voluptatum cupiditate veritatis in, accusamus quisquam.
        </p>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
      >
        <div class="relative">
          <h3
            class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
          >
            Transfer funds world-wide
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            minima sequi recusandae, porro maiores officia assumenda aliquam
            laborum ab aliquid veritatis impedit odit adipisci optio iste
            blanditiis facere. Totam, velit.
          </p>

          <dl class="mt-10 space-y-10">
            <div
              v-for="item in transferFeatures"
              :key="item.id"
              class="relative"
            >
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ item.name }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <img
            class="relative mx-auto"
            width="490"
            src="https://tailwindui.com/img/features/feature-example-1.png"
            alt=""
          />
        </div>
      </div>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div class="lg:col-start-2">
            <h3
              class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
            >
              Always in the loop
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ex obcaecati natus eligendi delectus, cum deleniti sunt in labore
              nihil quod quibusdam expedita nemo.
            </p>

            <dl class="mt-10 space-y-10">
              <div
                v-for="item in communicationFeatures"
                :key="item.id"
                class="relative"
              >
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <img
              class="relative mx-auto"
              width="490"
              src="https://tailwindui.com/img/features/feature-example-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/vue/outline';

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
];

const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon,
  },
];

export default defineComponent({
  setup() {
    return {
      transferFeatures,
      communicationFeatures,
    };
  },
});
</script>
