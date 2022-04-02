<template>
  <main>
    <HeroHome />
    <FeaturesSection />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import HeroHome from '../components/HeroHome.vue';

export default defineComponent({
  components: {
    FeaturesSection,
    HeroHome,
  },
  setup(components) {
    return {
      components,
    };
  },
});
</script>
