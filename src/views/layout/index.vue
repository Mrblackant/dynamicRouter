<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>
a
<script>
import AppMain  from '@/views/layout/components/AppMain'//页面布局的右侧区域
import sidebar  from '@/views/layout/components/sidebar'//页面布局的左侧菜单

export default {
  name: 'layout',
  components: {
    sidebar,
    AppMain
  }
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
