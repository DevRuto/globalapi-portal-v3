<template>
  <div class="container">

    <table class="table-fixed">
      <thead>
        <tr>
          <th class="w-1/12">ID</th>
          <th class="w-1/3">Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-white">
        <tr
          class="hover:bg-gray-200"
          v-for="(map, i) of paginatedMaps"
          :key="i">
          <td class="border border-blue-200">{{ map.id }}</td>
          <td class="border border-blue-200">{{ map.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { API_HOST } from '@/app.config';;

export default Vue.extend({
  data() {
    return {
      maps: [],
      start: 0,
      count: 10
    }
  },
  computed: {
    paginatedMaps: function(): any[] {
      return this.maps.slice(this.start, this.start + this.count);
    }
  },
  async mounted() {
    this.maps = await this.getMaps();
    console.log(this.maps);
  },
  methods: {
    getMaps() {
      const url = `${API_HOST}/api/v2.0/maps?is_validated=true`;
      return this.$axios.$get(url);
    }
  }
})
</script>
