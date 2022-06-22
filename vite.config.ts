import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @types/node
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    // 使用 scss 全局变量
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/variables.scss";'
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    port: 3000,
    // open: true,
    cors: true
  }
})
