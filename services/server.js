import { API_URL, DEV_MODE } from './config';

export default $axios => ({
  getServers: async (params) => {
    if (DEV_MODE) {
      console.log('loading server from json');
      return require('./servers.json');
    }
    return await $axios.$get(`${API_URL}/api/v2.0/servers`);
  }
});
