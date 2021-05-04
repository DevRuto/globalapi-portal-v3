module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn']
  }
};
