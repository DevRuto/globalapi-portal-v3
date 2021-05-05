<template>
  <a-layout style="height: 100vh">
    <a-layout-header id="nav-header" style="padding: 0">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="collapsed = !collapsed"
      />
      <span class="logo">GlobalAPI</span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model="collapsed" :collapsed-width="0" :trigger="null" collapsible>
        <div class="logo">
          DASHBOARD
        </div>
        <a-divider />
        <a-menu v-model="selectedMenuKey" :open-keys.sync="openSubKeys" theme="dark" :style="{ height: '100%', borderRight: 0 }" mode="inline">
          <a-menu-item key="home">
            <NuxtLink to="/">
              <a-icon type="home" />
              Home
            </NuxtLink>
          </a-menu-item>
          <a-sub-menu key="sub-servers">
            <span slot="title">
              <a-icon type="cloud-server" />
              <span>Servers</span>
            </span>
            <a-menu-item key="servers">
              <NuxtLink to="/servers">
                View All
              </NuxtLink>
            </a-menu-item>
            <a-menu-item key="servers-owned">
              Owned
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="margin: 20px">
        <Nuxt />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
      selectedMenuKey: ['home'],
      openSubKeys: []
    };
  },
  mounted () {
    const path = this.$route.path.substring(1).replace('/', '-');
    this.selectedMenuKey = [path];
    let i = path.length;
    if (path.includes('-')) {
      i = path.indexOf('-');
    }
    const root = path.substring(0, i);
    this.openSubKeys = ['sub-' + root];
  }
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#nav-header .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#nav-header .trigger:hover {
  color: #1890ff;
}

.logo {
  padding: 5px;
  margin: 10px;
  text-align: center;
  font-size: 20px;
}

</style>
