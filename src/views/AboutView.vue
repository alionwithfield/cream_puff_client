<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ContactCardsWithSmallPortraits></ContactCardsWithSmallPortraits>
  </div>
</template>

<script>
import ContactCardsWithSmallPortraits from '../components/ContactCardsWithSmallPortraits.vue';
// import { defineComponent } from 'vue';

export default {
  setup() {
    const components = {
      ContactCardsWithSmallPortraits: ContactCardsWithSmallPortraits,
    };
    return {
      components,
    };
  },
};
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
