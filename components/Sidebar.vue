<template>
  <aside
    class="flex flex-col transform bg-gray-700 w-64 ease-in-out transition-all duration-200"
    :class="value ? 'lg:translate-x-0' : 'lg:translate-x-0 -translate-x-full'"
  >
    <p class="flex flex-row flex-shrink-0 text-2xl font-semibold tracking-widest uppercase text-white px-4 py-2 mx-auto">Dashboard</p>
    <hr class="mx-4 border-gray-600">
    <nav class="flex-grow block pb-0 overflow-y-auto">
      <n-link
        v-for="nav of navItems"
        :key="nav.name"
        class="block pl-6 py-3 text-gray-200 font-semibold text-md antialiased transition duration-300 hover:bg-gray-600"
        :to="nav.path"
      >
        {{ nav.name }}
      </n-link>
    </nav>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      navItems: [
        {
          path: '#maps',
          name: 'Maps'
        },
        {
          path: '#servers',
          name: 'Servers'
        },
        {
          path: '#records',
          name: 'Records'
        },
        {
          path: '#bans',
          name: 'Bans'
        }
      ]
    };
  }
});
</script>
