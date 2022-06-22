<script setup lang="ts">
import { ref } from 'vue'

const size = ref('small')
</script>

<template>
  <el-config-provider :size="size">
    <router-view />
  </el-config-provider>
</template>

<style></style>
