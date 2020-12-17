<template>
  <div>
    <form class="text-black dark:text-white mx-auto w-2/3 py-2" @change="updateFilters">
      <div>
        <input v-model="global" type="checkbox" name="global" class="rounded border-gray-300 text-purple-600 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50">
        <label for="global">Global</label>
      </div>
    </form>
    <hr class="mx-auto px-2 w-full lg:w-2/3 border-gray-600">
    <map-table v-model="maps" class="table mx-auto md:w-full" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MapTable from '@/components/MapTable.vue';
import { API_HOST } from '@/app.config';

export default Vue.extend({
  components: {
    MapTable
  },
  data () {
    return {
      maps: [],
      global: true
    };
  },
  mounted () {
    this.loadMaps();
  },
  methods: {
    async loadMaps () {
      const params = new URLSearchParams();
      params.set('is_validated', this.global.toString());
      params.set('offset', '0');
      params.set('limit', '9999');
      const url = `${API_HOST}/api/v2.0/maps`;
      this.maps = await this.$axios.$get(url, { params });
      console.log(this.maps);
    },
    updateFilters () {
      this.loadMaps();
    }
  }
});
</script>

<style scoped>
.table {
  max-width: 1280px;
}
</style>
