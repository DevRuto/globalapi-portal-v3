<template>
  <div>
    <h1>ALL SERVERS</h1>

    <a-table :columns="columns" :data-source="servers">
      <span slot="ip" slot-scope="record"> {{ record.ip }}:{{ record.port }}</span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name'
  },
  {
    key: 'ipport',
    title: 'IP:Port',
    scopedSlots: { customRender: 'ip' }
  }
];
export default {
  data () {
    return {
      servers: [],
      columns
    };
  },
  async mounted () {
    this.servers = await this.$getServers();
  }
};
</script>
