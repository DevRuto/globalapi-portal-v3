<template>
  <aside
    class="flex flex-col flex-shrink-0 transform top-0 left-0 w-64 bg-gray-600 absolute h-full overflow-auto ease-in-out transition-all duration-200"
    :class="value ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="h-16" />
    <div class="flex flex-row items-center justify-between flex-shrink-0 px-8 py-4">
      <a href="#" class="text-lg font-semibold tracking-widest uppercase">GlobalAPI Portal</a>
    </div>
    <hr/>
    <nav class="flex-grow block pb-0 overflow-y-auto">
      <n-link
        v-for="nav of navItems"
        :key="nav.name"
        class="block px-4 py-2 hover:bg-red-600" :to="nav.path">{{ nav.name }}</n-link>
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
  data() {
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
        },
      ]
    }
  }
});
</script>
