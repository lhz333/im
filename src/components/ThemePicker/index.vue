<template>
  <el-color-picker v-model="theme" :predefine="predefineColors" />
</template>

<script lang="ts" setup name="ThemePicker">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { mix } from '@/utils'
import { useSettingsStore } from '@/store/settings'

// 解构取值
const { theme } = storeToRefs(useSettingsStore())

const predefineColors = ref([
  '#409EFF',
  '#1890ff',
  '#304156',
  '#212121',
  '#11a983',
  '#13c2c2',
  '#6959CD',
  '#f5222d'
])

// 白色混合色
const mixWhite = '#ffffff'
// 黑色混合色
const mixBlack = '#000000'
const node = document.documentElement
watch(
  theme,
  (color: string) => {
    node.style.setProperty('--el-color-primary', color)
    for (let i = 1; i < 10; i += 1) {
      node.style.setProperty(
        `--el-color-primary-light-${i}`,
        mix(color, mixWhite, i * 0.1)
      )
    }
    node.style.setProperty('--el-color-primary-dark', mix(color, mixBlack, 0.1))
  },
  { immediate: true }
)
</script>
