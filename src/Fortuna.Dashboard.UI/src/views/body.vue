<style>

.ant-menu-dark .ant-menu-item-selected{
  background-color: none !important;
}

.ant-menu-item-selected{
   background-color: none !important;
}

.main-content .logo {
  width: 120px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  margin: 9px 24px 9px 0;
  float: left;
}

.ant-layout-header,
.ant-layout-footer {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
</style>

<template>
  <a-layout class="main-content layout" style="min-height: 100vh">
    <a-layout-header style="height: 48px">
      <div class="logo" />
      <a-menu
        theme="dark"
        v-model:selectedKeys="current"
        mode="horizontal"
        style="height: 48px; line-height: 48px"
      >
        <router-link to="/">
          <a-menu-item key="index">
            <template #icon>
              <StockOutlined />
            </template>
            index
          </a-menu-item>
        </router-link>
         <router-link to="/trace">
          <a-menu-item key="trace">
            <template #icon>
              <BranchesOutlined />
            </template>
            trace
          </a-menu-item>
        </router-link>
         <router-link to="/topology">
          <a-menu-item key="topology">
            <template #icon>
              <DeploymentUnitOutlined />
            </template>
            topology
          </a-menu-item>
        </router-link>
       
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>

      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-link to="/index">index </router-link>
        <router-link to="/trace">trace </router-link>
        <router-link to="/topology">topology </router-link>

        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Fortuna Trace ©2021
    </a-layout-footer>
  </a-layout>
</template> 


<script lang="ts">

import { defineComponent, ref } from "vue" 
import { StockOutlined,BranchesOutlined,DeploymentUnitOutlined} from "@ant-design/icons-vue"

export default defineComponent({
  setup() { 
    return {
      current:ref<string[]>(["index"]),
    };
  },
  components: { StockOutlined,BranchesOutlined,DeploymentUnitOutlined },
});

</script>
