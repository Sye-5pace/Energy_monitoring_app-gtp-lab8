// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sub: resolve(__dirname, 'dashboard.html'),
        sub: resolve(__dirname, 'appliance_view.html'),
      },
    },
  },
})