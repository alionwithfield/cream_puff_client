<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import NavbarTop from './components/NavbarTop.vue';
import FooterHome from './components/FooterHome.vue';

export default defineComponent({
  components: {
    RouterView,
    NavbarTop,
    FooterHome,
  },
  setup(components) {
    return {
      components,
    };
  },
});
</script>

<template>
  <header>
    <NavbarTop />
  </header>

  <RouterView />
  <FooterHome />
</template>

<style>
#app {
  margin: 0;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  /* a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  } */
}

nav {
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  #app {
    width: 100%;
    padding: 0;
  }

  header {
    display: flex;
    place-items: center;
    padding: 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 16px;
    padding: 8px 0;
  }
}
</style>
