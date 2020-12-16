<template>
  <div>
    <data-table v-model="maps" class="table mx-auto" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTable from '@/components/DataTable.vue';
import { API_HOST } from '@/app.config';

export default Vue.extend({
  components: {
    DataTable
  },
  data () {
    return {
      maps: []
    };
  },
  mounted () {
    this.loadMaps();
  },
  methods: {
    async loadMaps () {
      const params = new URLSearchParams();
      params.set('is_validated', 'true');
      params.set('offset', '0');
      params.set('limit', '999');
      const url = `${API_HOST}/api/v2.0/maps`;
      this.maps = await this.$axios.$get(url, { params });
      console.log(this.maps);
    }
  }
});
</script>

<style scoped>
.table {
  width: 964px;
}
</style>
