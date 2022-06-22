import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  // 折叠按钮
  const isCollapse = ref(true)
  const changeCollapse = (value: boolean) => {
    isCollapse.value = value
  }
  // 主题
  const el = document.documentElement
  const theme = ref(getComputedStyle(el).getPropertyValue(`--el-color-primary`))

  const changeTheme = (value: string) => {
    theme.value = value
  }

  return {
    isCollapse,
    changeCollapse,
    theme,
    changeTheme
  }
})

export default {}
