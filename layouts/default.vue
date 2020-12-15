<template>
  <div class="flex flex-col min-h-screen">
    <Navbar v-model="isOpen" @sidebar-toggle="isOpen = !isOpen" />
    <div class="lg:flex lg:flex-grow">
      <Sidebar v-model="isOpen" />
      <div class="lg:flex-grow p-4">
        <Breadcrumb />
        <hr class="mx-4 border-gray-600">
        <Nuxt class="px-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Navbar from '~/components/Navbar.vue';

export default Vue.extend({
  components: {
    Breadcrumb,
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

body {
  background-color: rgb(24, 24, 24);
}
</style>
