<template>
  <div>
    <p className="color">首页</p>
    <h1>pinia 数据：{{ userStore.name }}</h1>
    <h2>{{ userStore.counter }}</h2>
    <el-button type="primary" @click="userStore.updateCounter">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/user'

const userStore = useUserStore()
</script>

<style scoped lang="scss">
.color {
  color: $redColor;
}
</style>
