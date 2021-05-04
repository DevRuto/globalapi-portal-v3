<template>
  <a-layout>
    <a-layout-header id="nav-header" style="background:#fff; padding: 0">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="collapsed = !collapsed"
        />
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model="collapsed" :collapsedWidth="0" :trigger="null" collapsible>
        <a-menu theme="dark" mode="inline">
          <a-sub-menu key="sub-servers">
            <span slot="title">
              <a-icon type="cloud-server"/>
              <span>Servers</span>
            </span>
            <a-menu-item key="server-list">View All</a-menu-item>
            <a-menu-item key="server-owned">Owned</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <Nuxt/>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    };
  }
}
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
</style>
