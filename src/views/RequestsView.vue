<template>
  <div class="requests">
    <TabsUnderlineBadges />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabsUnderlineBadges from '../components/TabsUnderlineBadges.vue';

export default defineComponent({
  components: {
    TabsUnderlineBadges,
  },
  setup(components) {
    return {
      components,
    };
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
