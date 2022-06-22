<template>
  <div class="collapse-btn" @click="handleChangeCollapse">
    <el-icon>
      <Expand v-if="settingsStore.isCollapse" />
      <Fold v-else />
    </el-icon>
  </div>
  <div class="header-right">
    <ThemePicker @change="handleChangeTheme"></ThemePicker>
  </div>
</template>
<script lang="ts" setup name="MyHeader">
import { useSettingsStore } from '@/store/settings'

const settingsStore = useSettingsStore()
// 改变主题颜色
const handleChangeTheme = (value: string) => {
  settingsStore.changeTheme(value)
}
// 菜单折叠按钮
const handleChangeCollapse = () => {
  settingsStore.changeCollapse(!settingsStore.isCollapse)
}
</script>

<style lang="scss">
.header-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-right > div {
  margin-left: 20px;
}
</style>
