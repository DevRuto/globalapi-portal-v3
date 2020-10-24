<template>
  <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <img class="h-8" src="/img/logo-inverted.svg" alt="Workcation">
      </div>
      <div class="sm:hidden">
        <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none" @click="isOpen = !isOpen">
          <Hamburger v-model="isOpen" />
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Home</a>
    </nav>
  </header>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue';
// https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/03-building-a-responsive-navbar/03-making-the-navbar-responsive
export default {
  components: {
    Hamburger
  },
  data () {
    return {
      isOpen: false
    };
  }
};
</script>
