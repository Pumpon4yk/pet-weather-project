import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  base: "/pet-weather-project/",
  plugins: [react(), reactRefresh()],
  server: {
    open: './',
    port: 8888,
  },
  preview: {
    open: './',
    port: 8080,
  },
  esbuild: {
    target: 'es2015'
  }
})
