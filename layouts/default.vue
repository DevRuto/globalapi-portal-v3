<template>
  <div>
    <Navbar v-model="isOpen" @sidebar-toggle="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
    <div class="lg:container lg:mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';
export default Vue.extend({
  components: {
    Navbar
  },
  data () {
    return {
      isOpen: false
    };
  }
});
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
