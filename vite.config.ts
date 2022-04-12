import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vitePluginImp({
      libList: [
        {
          libName: 'ant-design-vue',
          // style: (name) => `ant-design-vue/es/${name}/style/css`, // 加载css
          style: (name) => `ant-design-vue/es/${ name }/style` // 加载less
        }
      ]
    })
  ],
  server: {
    hmr: true
  },
  css: {
    preprocessorOptions: {
      less: {
        // 自定义定制主题
        modifyVars: {'primary-color': '#1188ff'},
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@/': resolve('src/*'),
      comps: resolve('src/components'),
      store: resolve('src/store')
    }
  }
})
