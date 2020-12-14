<template>
  <nav class="flex items-center justify-between h-16 px-6 z-40 bg-gray-800 text-white">
    <div class="flex items-center">
      <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none" @click="$emit('sidebar-toggle')">
        <Hamburger v-model="value" />
      </button>
      <span class="text-white text-2xl font-semibold tracking-widest pl-2 mx-auto">GlobalAPI</span>
    </div>
    <div class="flex items-center">
      <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
        Login
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Hamburger from '~/components/Hamburger.vue';

// https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/03-building-a-responsive-navbar/03-making-the-navbar-responsive
export default Vue.extend({
  components: {
    Hamburger
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    };
  }
});
</script>
