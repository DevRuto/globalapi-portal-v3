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

    <div class="inline w-full text-white">
      <button @click="prevPage" type="button" class="px-2 rounded border border-blue-200 bg-blue-600">Back</button>
      <button @click="nextPage" type="button" class="px-2 rounded border border-blue-200 bg-blue-600">Next</button>
      <span class="px-2">{{ start }} - {{ maps.length }}</span>
    </div>
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
      console.log('[Maps pagination] Start: %i, Count: %i', this.start, this.count);
      return this.maps.slice(this.start, this.start + this.count);
    }
  },
  mounted() {
    this.loadMaps();
  },
  methods: {
    async loadMaps() {
      const params = new URLSearchParams();
      params.set('is_validated', 'true');
      params.set('offset', '0');
      params.set('limit', '999');
      const url = `${API_HOST}/api/v2.0/maps`;
      this.maps = await this.$axios.$get(url, { params });
      console.log(this.maps);
    },
    nextPage() {
      this.start = Math.min(this.start + this.count, this.maps.length);
    },
    prevPage() {
      this.start = Math.max(this.start - this.count, 0);
    }
  }
})
</script>
