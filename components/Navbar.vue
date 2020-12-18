<template>
  <nav class="flex items-center justify-between h-16 px-6 z-40 bg-gray-800 text-white top-0">
    <div class="flex items-center">
      <button type="button" class="lg:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none" @click="$emit('sidebar-toggle')">
        <Hamburger v-model="value" />
      </button>
      <span class="text-white text-2xl font-semibold tracking-widest pl-2 mx-auto">GlobalAPI</span>
    </div>
    <div class="flex items-center">
      <label>Theme</label>
      <toggle v-model="darkTheme" class="px-4" @click="toggleTheme" />
      <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
        Login
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Toggle from '@/components/Toggle.vue';
import Hamburger from '~/components/Hamburger.vue';

// https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/03-building-a-responsive-navbar/03-making-the-navbar-responsive
export default Vue.extend({
  components: {
    Toggle,
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
      isOpen: false,
      darkTheme: false
    };
  },
  mounted () {
    if (localStorage.theme === 'dark') {
      document?.querySelector('html')?.classList.add('dark');
      this.darkTheme = true;
    }
  },
  methods: {
    toggleTheme () {
      console.log(localStorage.theme);
      if (localStorage.theme === 'dark') {
        document?.querySelector('html')?.classList.remove('dark');
        localStorage.removeItem('theme');
        this.darkTheme = false;
      } else {
        document?.querySelector('html')?.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        this.darkTheme = true;
      }
    }
  }
});
</script>
