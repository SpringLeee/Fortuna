<template>
  <a-layout class="components-layout-side" style="min-height: 100vh">
    <a-layout-sider  breakpoint="sm" v-model="collapsed" collapsible>
      <div class="logo">
        <h3 v-if="!collapsed" style="color: #fff">Fortuna</h3>
        <h3 v-if="collapsed" style="color: #fff; margin-left: 8px">F</h3>
      </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">

        <a-menu-item key="1">
          <router-link to="/">
            <a-icon type="block" />
            <span>Index</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="2">
          <router-link to="/">
            <a-icon type="stock" />
            <span>Service</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="3">
          <router-link to="/trace">
            <a-icon type="branches" />
            <span>Trace</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="4">
          <router-link to="/relationship">
            <a-icon type="deployment-unit" />
            <span>Relationship</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="a-alyout-header-bar">
        <div style="flex: 1 1 0%"></div>
        <div class="antd-pro-components-global-header-index-right">
          <a class="ant-dropdown-header-action" href="#">
            <a-icon type="bulb" />
          </a>

          <a-dropdown>
            <span
              class="ant-dropdown-header-action"
              @click="(e) => e.preventDefault()"
            >
              <!-- <a-badge count="5" offset="[10,10]">
                   <a-icon type="bell" />
                </a-badge>  -->
            </span>

            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>

      <a-layout-content style="margin: 0 16px">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        Fortuna APM ©2021
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
.logo {
  cursor: pointer;
}

.components-layout-side .logo {
  height: 32px;
  margin: 16px;
  padding-left: 14px;
  line-height: 36px;
}

.a-alyout-header-bar {
  padding: 0 16px;
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}

.ant-dropdown-header-action i {
  font-size: 18px;
}

.ant-dropdown-header-action {
  height: 100%;
  width: 38px;
  padding: 18px 12px;
  cursor: pointer;
  color: inherit;
}

.ant-dropdown-header-action:hover {
  background: rgba(0, 0, 0, 0.025);
  color: inherit;
}
</style>
