<template>
  <nav class="px-2 py-2 text-white w-full">
    <ol class="flex">
      <li v-for="(crumb, i) of breadcrumbs" :key="i" class="px-2">
        <span v-if="crumb.splitter" class="text-gray-400">/</span>
        <n-link v-if="!crumb.splitter && !crumb.disabled" class="capitalize text-blue-200" :to="crumb.to">
          {{ crumb.name }}
        </n-link>
        <span v-else class="capitalize text-gray-400">
          {{ crumb.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      breadcrumbs: [] as any[]
    };
  },
  mounted() {
    const breadcrumbs = [] as any[];
    const routes = this.$route.path.split('/')
      .filter(v => v)
      .map((routeName, i, arr) => ({
        name: routeName,
        disabled: arr.length - 1 === i,
        to: `/${arr.slice(0, i + 1).join('/')}`
      }));

    breadcrumbs.push(routes[0]);
    for (let i = 1; i < routes.length; i++) {
      breadcrumbs.push({ splitter: true });
      breadcrumbs.push(routes[i]);
    }

    console.log(breadcrumbs);
    this.breadcrumbs = breadcrumbs;
  }
});
</script>
