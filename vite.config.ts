import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [vue()],
    // ↓解析配置
    resolve: {
      // ↓路径别名
      alias: {
        // "@": "./src",
        "@":resolve(__dirname, "src")
      }
    },
    server:{
      hmr: true
    }
})