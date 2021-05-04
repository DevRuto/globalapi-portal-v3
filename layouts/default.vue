<template>
  <a-layout style="height: 100vh">
    <a-layout-header id="nav-header" style="padding: 0">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="collapsed = !collapsed"
      />
      <span>GlobalAPI</span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model="collapsed" :collapsed-width="0" :trigger="null" collapsible>
        <div class="logo">
          DASHBOARD
        </div>
        <a-divider />
        <a-menu theme="dark" :style="{ height: '100%', borderRight: 0 }" mode="inline">
          <a-menu-item key="home">
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </a-menu-item>
          <a-sub-menu key="sub-servers">
            <span slot="title">
              <a-icon type="cloud-server" />
              <span>Servers</span>
            </span>
            <a-menu-item key="server-list">
              <NuxtLink to="/servers">
                View All
              </NuxtLink>
            </a-menu-item>
            <a-menu-item key="server-owned">
              Owned
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="margin: 10px">
        <Nuxt />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    };
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
