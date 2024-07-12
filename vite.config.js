// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sub1: resolve(__dirname, 'dashboard.html'),
        sub2: resolve(__dirname, 'appliance_view.html'),
      },
    },
  },
})