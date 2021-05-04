import serverService from '~/services/server';

// https://dev.to/radonirinamaminiaina/nuxt-like-a-pro-use-service-pattern-my-best-practice-1dna
export default ({ $axios }, inject) => {
  const allMethods = {
    ...serverService($axios)
  };
  const methods = Object.keys(allMethods);
  console.log(methods);
  methods.forEach((method) => {
    inject(method, allMethods[method]);
  });
};
