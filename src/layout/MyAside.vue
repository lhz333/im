<template>
  <el-menu
    class="sider-menu"
    :default-active="onRoutes"
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#20a0ff"
    unique-opened
  >
    <template v-for="(item, index) in routerItems">
      <template v-if="item.children && item.children.length">
        <el-sub-menu :key="index" :index="item.path">
          <template #title>
            <el-icon><component :is="item.icon"></component></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(chid, chidIndex) in item.children">
            <el-sub-menu
              v-if="chid.children && chid.children.length"
              :key="chidIndex"
              :index="chid.path"
            >
              <template #title>{{ chid.name }}</template>
              <app-link
                v-for="(son, sonIndex) in chid.children"
                :key="sonIndex"
                :to="son.path"
              >
                <el-menu-item :index="son.path">{{ son.name }}</el-menu-item>
              </app-link>
            </el-sub-menu>
            <app-link v-else :key="chid.path" :to="chid.path">
              <el-menu-item :index="chid.path">{{ chid.name }}</el-menu-item>
            </app-link>
          </template>
        </el-sub-menu>
      </template>
      <template v-else>
        <app-link :key="index" :to="item.path">
          <el-menu-item :index="item.path">
            <el-icon><component :is="item.icon"></component></el-icon>
            <template #title> {{ item.name }} </template>
          </el-menu-item>
        </app-link>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/settings'

const router = useRouter()
// 折叠按钮
const { isCollapse } = storeToRefs(useSettingsStore())
// 菜单列表
const routerItems: any = [
  { path: '/', icon: 'HomeFilled', name: '首页' },
  { path: '/message', icon: 'ChatLineRound', name: '我的消息' },
  { path: '/contacts', icon: 'UserFilled', name: '我的联系人' },
  { path: '/note', icon: 'Notebook', name: '我的笔记' },
  { path: '/settings', icon: 'Setting', name: '我的设置' },
  { path: 'https://github.com/lhz333/im', icon: 'Bell', name: 'GitHub 源码' }
]
// 当前路由
const onRoutes = computed(() => router.currentRoute.value.path)
</script>

<style lang="scss" scoped>
.sider-menu {
  height: 100%;
  a {
    text-decoration: none;
  }
}
</style>
