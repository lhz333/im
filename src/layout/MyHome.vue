<template>
  <el-container class="wrapper">
    <el-header class="header">
      <MyHeader />
    </el-header>
    <el-container>
      <el-aside :width="`${isCollapse ? '80px' : '120px'}`">
        <MyAside />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup name="MyHome">
import { storeToRefs } from 'pinia'
import MyHeader from '@/layout/MyHeader.vue'
import MyAside from '@/layout/MyAside.vue'
import { useSettingsStore } from '@/store/settings'

const { isCollapse } = storeToRefs(useSettingsStore())
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  font-size: 22px;
  background-color: rgb(36, 47, 66);
}
</style>
