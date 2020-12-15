<template>
  <div class="lg:static absolute lg:w-64 w-full">
    <aside
      class="flex flex-col transform lg:w-64 h-full bg-gray-700 ease-in-out transition-all duration-200 pb-2"
      :class="value ? 'translate-y-0' : 'lg:translate-y-0 -translate-y-full'"
    >
      <p class="flex flex-row flex-shrink-0 text-2xl font-medium tracking-widest uppercase text-white px-4 py-2 mx-auto">
        Dashboard
      </p>
      <hr class="mx-4 border-gray-600">
      <nav class="flex-grow block pb-0 overflow-y-auto">
        <n-link
          class="block pl-6 py-3 text-white font-medium tracking-wider text-lg transition duration-300 hover:bg-gray-600"
          to="/dashboard/maps"
        >
          <svg class="inline mr-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Maps
        </n-link>
        <n-link
          class="block pl-6 py-3 text-white font-medium tracking-wider text-lg transition duration-300 hover:bg-gray-600"
          to="#servers"
        >
          <svg class="inline mr-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
          Servers
        </n-link>
        <n-link
          class="block pl-6 py-3 text-white font-medium tracking-wider text-lg transition duration-300 hover:bg-gray-600"
          to="#records"
        >
          <svg class="inline mr-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Records
        </n-link>
        <n-link
          class="block pl-6 py-3 text-white font-medium tracking-wider text-lg transition duration-300 hover:bg-gray-600"
          to="#bans"
        >
          <svg class="inline mr-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
          Bans
        </n-link>
      </nav>
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
});
</script>
