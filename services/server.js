import servers from './servers.json';

export default $axios => ({
  getServers: (params) => {
    return servers;
  },
  getTest: () => {
    return [];
  }
});
