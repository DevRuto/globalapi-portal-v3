<template>
  <div>
    <h1>ALL SERVERS</h1>

    <a-table row-key="id" :columns="columns" :data-source="servers">
      <span slot="ip" slot-scope="record">
        {{ record.ip }}:{{ record.port }}
      </span>
      <template slot="owner" slot-scope="record">
        <a-button type="primary" ghost>
          <a target="_blank" :href="'http://steamcommunity.com/profiles/'+record.owner_steamid64">Steam</a>
        </a-button>
      </template>
      <template slot="action" slot-scope="record">
        <a-button type="primary">
          <a :href="'steam://connect/' + record.ip + ':' + record.port">
            Connect
          </a>
        </a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID'
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name'
  },
  {
    key: 'ipport',
    title: 'IP:Port',
    scopedSlots: { customRender: 'ip' }
  },
  {
    key: 'owner',
    title: 'Owner',
    scopedSlots: { customRender: 'owner' }
  },
  {
    key: 'action',
    title: 'Action',
    scopedSlots: { customRender: 'action' }
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
